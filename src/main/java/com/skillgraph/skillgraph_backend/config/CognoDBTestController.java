package com.skillgraph.skillgraph_backend.config;

import java.util.List;
import java.util.Map;

import org.neo4j.driver.Driver;
import org.neo4j.driver.Session;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
public class CognoDBTestController {

    private final Driver driver;

    public CognoDBTestController(Driver driver) {
        this.driver = driver;
    }

    // 1. Test CognoDB connection
    @GetMapping("/api/test/cognodb")
    public String testConnection() {

        try (Session session = driver.session()) {

            return session
                    .run("RETURN 'CognoDB connection successful!' AS message")
                    .single()
                    .get("message")
                    .asString();

        } catch (Exception e) {

            return "CognoDB connection failed: " + e.getMessage();
        }
    }

    // 2. Get student's skills
    @GetMapping("/api/students/{name}/skills")
    public List<Map<String, Object>> getStudentSkills(
            @PathVariable String name) {

        try (Session session = driver.session()) {

            return session.run(
                    """
                    MATCH (s:Student {name: $name})-[:HAS_SKILL]->(skill:Skill)
                    RETURN skill.name AS skill
                    ORDER BY skill.name
                    """,
                    Map.of("name", name)
            ).list(record -> record.asMap());
        }
    }

    // 3. Get job recommendations
    @GetMapping("/api/students/{name}/recommendations")
    public List<Map<String, Object>> getRecommendations(
            @PathVariable String name) {

        try (Session session = driver.session()) {

            return session.run(
                    """
                    MATCH (s:Student {name: $name})
                    MATCH (j:Job)-[:REQUIRES]->(skill:Skill)

                    WITH s, j,
                         collect(DISTINCT skill.name) AS requiredSkills

                    OPTIONAL MATCH (s)-[:HAS_SKILL]->(mySkill:Skill)

                    WITH j,
                         requiredSkills,
                         collect(DISTINCT mySkill.name) AS mySkills

                    WITH j,
                         size([x IN requiredSkills
                               WHERE x IN mySkills]) AS matchedSkills,
                         size(requiredSkills) AS totalSkills

                    RETURN j.title AS job,
                           matchedSkills,
                           totalSkills,
                           100.0 * matchedSkills / totalSkills
                           AS matchPercentage

                    ORDER BY matchPercentage DESC
                    """,
                    Map.of("name", name)
            ).list(record -> record.asMap());
        }
    }

    // 4. Get skill gap for a selected job
    @GetMapping("/api/students/{name}/job/{jobId}/skill-gap")
    public List<Map<String, Object>> getSkillGap(
            @PathVariable String name,
            @PathVariable int jobId) {

        try (Session session = driver.session()) {

            return session.run(
                    """
                    MATCH (s:Student {name: $name})
                    MATCH (j:Job {id: $jobId})-[:REQUIRES]->(skill:Skill)

                    WITH s, j,
                         collect(DISTINCT skill.name) AS requiredSkills

                    OPTIONAL MATCH (s)-[:HAS_SKILL]->(mySkill:Skill)

                    WITH j,
                         requiredSkills,
                         collect(DISTINCT mySkill.name) AS mySkills

                    UNWIND requiredSkills AS requiredSkill

                    RETURN j.title AS job,
                           requiredSkill,

                           CASE
                               WHEN requiredSkill IN mySkills
                               THEN 'Have'
                               ELSE 'Missing'
                           END AS status

                    ORDER BY requiredSkill
                    """,
                    Map.of(
                            "name", name,
                            "jobId", jobId
                    )
            ).list(record -> record.asMap());
        }
    }
}