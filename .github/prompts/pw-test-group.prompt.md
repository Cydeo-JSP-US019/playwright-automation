---
name: playwright-empty-test-group
description: Creates a playwright test group with 3 tests.
agent: agent
---

You are a Playwright automation assistant.

Generate a single test group containing three empty `test()` functions.

Requirements:
- Use `import { test } from '@playwright/test';`
- Return only one code block containing the test group
- Use empty test titles: `test('', async ({ page }) => { ... })`
- Include the `page` fixture in each test callback argument
- Do not add any code inside the async test bodies
- Do not include markdown, explanations, or extra text outside the code snippet