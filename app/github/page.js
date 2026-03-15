"use client";
import { useState, useEffect } from "react";
import { team } from "@/data/team";
import SectionHeading from "@/components/SectionHeading";
import ScrollReveal from "@/components/ScrollReveal";
import {
  FaStar,
  FaCodeBranch,
  FaExternalLinkAlt,
  FaBook,
} from "react-icons/fa";

export default function GitHubPage() {
  const [githubData, setGithubData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAll = async () => {
      const results = {};
      for (const member of team) {
        try {
          const res = await fetch(
            `https://api.github.com/users/${member.githubUsername}/repos?sort=updated&per_page=6`,
            { next: { revalidate: 3600 } }
          );
          if (!res.ok) throw new Error("API limit");
          const repos = await res.json();
          const totalStars = repos.reduce(
            (acc, r) => acc + (r.stargazers_count || 0),
            0
          );
          const totalForks = repos.reduce(
            (acc, r) => acc + (r.forks_count || 0),
            0
          );
          results[member.githubUsername] = {
            repos,
            totalStars,
            totalForks,
            totalRepos: repos.length,
          };
        } catch {
          results[member.githubUsername] = {
            repos: [],
            totalStars: 0,
            totalForks: 0,
            totalRepos: 0,
            error: true,
          };
        }
      }
      setGithubData(results);
      setLoading(false);
    };
    fetchAll();
  }, []);

  return (
    <div className="page-enter">
      <div className="page-header">
        <div className="container">
          <h1>
            Our <span className="gradient-text">GitHub</span>
          </h1>
          <p>
            Explore our open source contributions, repositories, and development
            activity.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          {loading ? (
            <div className="github-loading">
              <div className="github-loading-spinner" />
              <p>Loading GitHub data...</p>
            </div>
          ) : (
            team.map((member, i) => {
              const data = githubData[member.githubUsername];
              return (
                <ScrollReveal key={member.id} delay={i * 150}>
                  <div className="github-profile">
                    <div className="github-profile-header">
                      <div className="github-avatar">
                        {member.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </div>
                      <div>
                        <h3 className="github-username">{member.name}</h3>
                        <p className="github-role">
                          {member.role} •{" "}
                          <a
                            href={member.social.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ color: "var(--accent-primary)" }}
                          >
                            @{member.githubUsername}
                          </a>
                        </p>
                      </div>
                    </div>

                    <div className="github-stats">
                      <div className="github-stat">
                        <FaBook />
                        <span className="github-stat-value">
                          {data?.totalRepos || 0}
                        </span>{" "}
                        Repos
                      </div>
                      <div className="github-stat">
                        <FaStar />
                        <span className="github-stat-value">
                          {data?.totalStars || 0}
                        </span>{" "}
                        Stars
                      </div>
                      <div className="github-stat">
                        <FaCodeBranch />
                        <span className="github-stat-value">
                          {data?.totalForks || 0}
                        </span>{" "}
                        Forks
                      </div>
                    </div>

                    {data?.error ? (
                      <p style={{ color: "var(--text-tertiary)", fontSize: "0.9rem" }}>
                        GitHub API rate limit reached. Please try again later or
                        visit the profile directly.
                      </p>
                    ) : (
                      <div className="github-repos">
                        {data?.repos?.map((repo) => (
                          <a
                            key={repo.id}
                            href={repo.html_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="github-repo-card"
                          >
                            <div className="github-repo-name">
                              <FaBook /> {repo.name}
                            </div>
                            {repo.description && (
                              <p className="github-repo-desc">
                                {repo.description}
                              </p>
                            )}
                            <div className="github-repo-meta">
                              {repo.language && <span>{repo.language}</span>}
                              <span>
                                <FaStar /> {repo.stargazers_count}
                              </span>
                              <span>
                                <FaCodeBranch /> {repo.forks_count}
                              </span>
                            </div>
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                </ScrollReveal>
              );
            })
          )}
        </div>
      </section>
    </div>
  );
}
