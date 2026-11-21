import { existsSync, readFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const skillDir = path.join(root, "skills", "launch-project");
const skillPath = path.join(skillDir, "SKILL.md");

function read(rel: string): string {
  return readFileSync(path.join(root, rel), "utf8");
}

describe("launch-project skill contract", () => {
  const raw = readFileSync(skillPath, "utf8");
  const frontmatter = raw.match(/^---\r?\n([\s\S]*?)\r?\n---/);

  it("has name launch-project and a description that says what and when", () => {
    expect(frontmatter).not.toBeNull();
    const body = frontmatter?.[1] ?? "";
    expect(body).toMatch(/name:\s*launch-project/);
    const folded = body.match(/description:\s*>-\s*([\s\S]*)$/);
    const description = (folded?.[1] ?? "").replace(/\s+/g, " ").trim();
    expect(description.length).toBeGreaterThan(0);
    expect(description.length).toBeLessThanOrEqual(1024);
    expect(description).toMatch(/Use when/i);
    expect(body).not.toMatch(/disable-model-invocation/);
  });

  it("keeps SKILL.md under 500 lines and points at real reference files", () => {
    expect(raw.split(/\r?\n/).length).toBeLessThanOrEqual(500);
    const links = [...raw.matchAll(/\]\(([^)]+\.md)\)/g)].map((match) => match[1]);
    expect(links.length).toBeGreaterThan(0);
    for (const link of links) {
      expect(existsSync(path.join(skillDir, link)), link).toBe(true);
    }
  });

  it("ships the policy docs the skill requires", () => {
    for (const file of [
      "PRD.md",
      "AGENTS.md",
      "MEMORY.md",
      "SKILLS.md",
      "LICENSE.md",
      "SECURITY.md",
      "CONTRIBUTING.md",
      "CHANGELOG.md",
      "docs/RUNBOOK.md",
      "docs/ARCHITECTURE.md",
      "docs/WORKFLOW.md",
    ]) {
      expect(existsSync(path.join(root, file)), file).toBe(true);
    }
    expect(read("LICENSE.md")).toMatch(/MIT License/);
    expect(read("SECURITY.md")).toMatch(/private vulnerability reporting/i);
  });
});
