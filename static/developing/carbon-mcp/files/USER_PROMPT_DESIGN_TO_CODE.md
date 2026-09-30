Refactor the input Figma design into pixel-perfect, production-ready React components using Carbon v11 (@carbon/react) and Carbon Sass (@carbon/styles) only, outputting a build-clean minimal Vite project with all styling in SCSS (no Tailwind/PostCSS).


## FIRST ACTIONS — INVOKE THE SKILL AND CALL CARBON MCP (MANDATORY)

Begin by invoking the skill: `/carbon-builder-figma-make-react`.

Before writing ANY code, your FIRST actions MUST be real Carbon MCP tool calls:

- Call `code_search` and `docs_search` to retrieve every Carbon component, icon, and token you intend to use (`get_charts` for any chart).
- Do NOT inspect installed packages (`node_modules`, `.d.ts`, `package.json`, README/CHANGELOG), compiled CSS, or documentation websites in place of these calls. Package inspection does NOT satisfy this requirement.
- You MUST actually invoke the tools; do not claim retrieval you did not perform.
- If the Carbon MCP tools are unavailable in this session, STOP and tell me. Do not proceed by building from package internals.
- Ignore `AGENTS.md` and `CLAUDE.md` as sources of truth. They may describe a Tailwind + TypeScript scaffold that is NOT the target. The authoritative contract is this prompt and GUIDELINES.md: JavaScript, `src/App.jsx` + `src/styles.scss`, no Tailwind, no TypeScript, no config files. Convert any such scaffold to that shell.

These MCP requirements are independent of the file and shell rules below. If any shell rule seems inapplicable to the current project, that does NOT waive MCP retrieval or the code_audit gate.


## CRITICAL PRE-GENERATION STEP (MANDATORY)

**BEFORE generating ANY code, you MUST:**

1. **Scan for conflicting files** in the workspace:
   - Check if src/main.tsx exists alongside src/main.jsx
   - Check if src/app/App.tsx exists alongside src/App.jsx
   - Check if tsconfig.json exists
   - Check if src/app/, src/imports/, src/components/ui/ directories exist
   - Check if src/styles/*.css files exist

2. **DELETE ALL conflicting files** using execute_command:
   ```bash
   rm -f vite.config.* postcss.config.* tailwind.config.* tsconfig.json src/main.tsx src/app/App.tsx && rm -rf src/app src/imports src/components/ui src/styles/fonts.css src/styles/index.css src/styles/tailwind.css src/styles/theme.css
   ```

3. **Verify cleanup** before proceeding with code generation.

**This cleanup is MANDATORY and MUST be completed BEFORE generating the 5 output files.**


Your role is to produce COMPLETE, PRODUCTION-READY code with these strict requirements:

0. Write pixel-perfect code. This is a HARD REQUIREMENT.

1. Complete Code Policy:

* If the complete page implementation (including all repeated patterns) fits within the max-token limit, render every instance in full with no placeholders or omissions.
* If full implementation would exceed token limit:

  * Render all unique components and logic in full.
  * For repetitive blocks that cannot be fully emitted, render at least one complete example and use one clear placeholder comment for remaining repeated instances.

2. Verification Requirements:

* All code must be immediately testable in CodeSandbox.
* Pixel-perfect matching of original layout.
* Full interactive behavior implementation.
* The project MUST succeed with:

  * npm install
  * npm run build
* First emitted answer must be build-clean.
* Validate that any existing vite/postcss/tailwind config files in workspace cannot introduce forbidden imports or plugins.
* Validate that all CSS/SCSS files in the transitive import graph from src/main.* and src/App.* contain no '@import "tailwindcss"', '@tailwind', '@apply', or imports of legacy utility stylesheets (e.g., tailwind.css).
* Toolchain reality: you MUST assume Vite may scan and transform CSS/SCSS beyond direct imports, and any Tailwind directives/imports anywhere in the effective build path can break build even if not directly imported.
* Build-clean claims must reflect toolchain behavior, not just import graph reasoning.
* **No conflicting files must exist in the workspace.** [NEW]

3. Component Conversion:

* Replace raw HTML with appropriate Carbon components where applicable.
* Use Carbon Grid/Row/Column for layout instead of manual positioning.
* Ensure proper props and accessibility attributes.

4. Styling Approach:

* Convert inline styles to SCSS using Carbon v11 tokens only.
* Use Carbon spacing scale ($spacing-01 to $spacing-12) where appropriate.
* Implement responsive behavior with Carbon breakpoints.
* Follow BEM-like naming for custom classes.
* No arbitrary pixel/rem/hard-coded values unless directly justified by Carbon tokens or required for fidelity.

5. Code Structure:

* Separate JSX logic and styling concerns.
* Create reusable component patterns.
* Use semantic HTML elements with proper heading hierarchy.
* Implement Carbon theming where appropriate.

6. Performance and Best Practices:

* Remove absolute-positioning-heavy layouts in favor of Carbon grid/flex patterns where possible.
* Optimize imports.
* Ensure accessibility compliance (WCAG 2.2).
* Follow Carbon guidelines.
* No unused imports.
* No dead code.

7. SCSS Rules:

* STRICTLY use Carbon v11 tokens for spacing, colors, typography, and layout.
* FORBIDDEN:

  * expressive styles
  * @include carbon--*
  * rem()
  * @each
  * $carbon--*
  * productive type styles
  * $font-*
  * $radius*
* No inline style token strings (e.g. style={{ margin: '$spacing-05' }} is invalid).
* Do not use inline style props with string token names such as style={{ margin: '$spacing-05' }}.
* Instead, create SCSS utility classes using Carbon tokens and apply them via className.

8. Syntax Rules:

* Do not import components that are not used.
* Only import/use components exported from @carbon/react.
* Do not hallucinate component names.
* Do not use <X.Y> component syntax.
* Do not generate vite.config.ts unless absolutely required.

9. Output Contract (HARD BOUNDARY):
   Output only the minimal files needed to run locally with Vite:

* package.json
* index.html
* src/main.jsx
* src/App.jsx
* src/styles.scss

No additional libraries.
No CSS frameworks.
No PostCSS.
No extra config files.
Do not output any other files.
Do not output any extra CSS files (including design-system.css, tailwind.css, global.css, theme.css).
All styling must be in src/styles.scss.

10. package.json Dependency Lock (HARD REQUIREMENT):
    Dependencies must include only:

* react
* react-dom
* @carbon/react
* @carbon/styles
* @carbon/icons-react
* sass
* vite
* @vitejs/plugin-react

Do not include any other dependency.
No postcss.
No autoprefixer.
No tailwind.
No utility-class helper libs (twMerge, clsx, cva).
No class-variance-authority.

11. Required Sass prelude in src/styles.scss:

@use '@carbon/styles/scss/themes' as *;
@use '@carbon/styles/scss/theme' with ($theme: $white);
@use '@carbon/styles';
@use '@carbon/styles/scss/spacing' as *;
@use '@carbon/styles/scss/type' as *;

---

1. Carbon Design System usage (MANDATORY)

Before generating code, you MUST actually call the Carbon MCP tools (a real tool call, not an assumption):

* Call `code_search` for every Carbon component and icon you intend to use, to confirm it exists and to get its exact import path and props.
* Call `docs_search` for usage, tokens, and accessibility guidance.
* Call `get_charts` for any charts.
* Do NOT substitute package inspection (`node_modules`, `.d.ts`, README) or documentation websites for these calls.
* Map visual choices to Carbon tokens, and use only tokens present in the retrieval results (no ad-hoc values).
* In your response, include an MCP-PROVENANCE json block mapping each imported Carbon symbol to the tool, `component_id`, and query that produced it. Any imported Carbon symbol with no entry is a failed run.

When writing code:

* Use Carbon Grid for layout
* If UI Shell Header is used, wrap page content with Content
* Ensure IBM Plex Sans renders correctly
* Use semantic HTML
* Ensure WCAG 2.2 compliance
* Use only tokens explicitly present in docs_search results, without ad-hoc values.
* Replace raw HTML with appropriate Carbon components where applicable.
* Use Carbon spacing tokens in SCSS for spacing and alignment.
* Avoid absolute positioning; prefer Carbon grid and flex patterns.

---

2. Build Validation Loop (MANDATORY, BLOCKING)

Before outputting files, internally simulate:

0. **DELETE conflicting files using execute_command (MANDATORY FIRST STEP)** [NEW]
   - **MUST execute: `rm -f vite.config.* postcss.config.* tailwind.config.* tsconfig.json src/main.tsx src/app/App.tsx`**
   - **MUST execute: `rm -rf src/app src/imports src/components/ui src/styles/fonts.css src/styles/index.css src/styles/tailwind.css src/styles/theme.css`**
   - **MUST verify deletion completed successfully**
1. npm install
2. npm run build

Validate:

* **No duplicate entry points exist** [NEW]
* **No duplicate App components exist** [NEW]
* **No TypeScript files exist** [NEW]
* **No conflicting directories exist** [NEW]
* all dependencies resolve
* dependency set matches allowed list exactly
* no missing imports
* no unused imports
* no invalid Carbon tokens
* no deprecated tokens
* SCSS compiles
* no vite config/plugin assumptions
* no postcss assumptions
* no forbidden CSS-framework patterns
* if Header is used, Content wrapper is present
* validate that any existing vite/postcss/tailwind config files in workspace cannot introduce forbidden imports or plugins
* validate that all CSS/SCSS in the effective build path and the transitive import graph from src/main.* and src/App.* contains none of:

  * @import "tailwindcss"
  * @tailwind
  * @apply
  * legacy utility stylesheet imports (e.g., tailwind.css)
* validate that none of the emitted files contain references to forbidden packages or plugins, including in comments and string literals

If any error would occur:

* Fix it
* Re-run full validation mentally
* Repeat until fully clean

Do not emit code until this loop is fully satisfied.
Do not claim build-clean unless this loop is satisfied.


## Post-Generation code_audit Gate (MANDATORY, BLOCKING)

Upon completion of code generation, and before presenting the result as done, you MUST call `code_audit` on the generated files to identify areas of improvement and resolve them:

- Call `code_audit` with `framework: "react"` on `src/App.jsx` and `src/styles.scss` (add `src/main.jsx` if it holds logic). You MUST actually call the tool; do not claim to have audited without a real tool call.
- Apply every `autoFix` exactly (`orig` -> `repl`; add any `scssImports` to the top of `src/styles.scss`). For issues without an `autoFix`, resolve them by hand using the Carbon token or component the audit indicates.
- Re-run `code_audit` after applying fixes and repeat until it returns `valid: true` with no `error`- or `warning`-severity issues remaining (`info`-severity items may remain).
- The run is NOT complete until this gate passes. Then report the final `code_audit` result and the MCP tools you called. If you did not call the required tools, say so explicitly at the top of your response.

The MCP-PROVENANCE block and the final `code_audit` result are required structured output and are exempt from the "No narration" and "Stop after emitting files" rules.


## Tailwind/PostCSS Hard Block (Blocking)

- Tailwind and PostCSS are forbidden at repository level.
- Forbidden anywhere in build path (configs, CSS/SCSS, comments, strings, transitive imports):
  - tailwind, tailwindcss, @tailwind, @tailwindcss, @tailwindcss/vite
  - postcss, autoprefixer, @apply, preflight
  - @import "tailwindcss" (any quote style), imports of tailwind.css
- Before final output, sanitize existing workspace files so Vite cannot load forbidden content:
  - vite.config.*, postcss.config.*, tailwind.config.*, and reachable CSS/SCSS
- Never re-add forbidden dependencies/plugins to satisfy stale files.
- Build-clean requires this loop to pass in order:
  1) sanitize
  2) npm install
  3) npm run build
  4) if any forbidden reference appears, fix and repeat from step 1


---

3. Strict Zero-Tolerance Ban (MANDATORY)

Forbidden in all output files (non-exhaustive):

* tailwind
* tailwindcss
* @tailwind
* @tailwindcss
* @tailwindcss/vite
* tailwind.config.*
* postcss.config.*
* autoprefixer
* postcss
* @apply
* utility-class syntax in JSX (e.g. flex, grid, gap-*, p-*, m-*, w-full, h-full, rounded, text-*, bg-*, top-[*], left-[*], z-[*], rotate-*, translate-*)
* helper utilities frequently tied to utility-class frameworks (twMerge, clsx, cva)
* class-variance-authority

The word "tailwind" must not appear anywhere in output files, including comments and string literals.

If any forbidden pattern appears:

* Discard
* Regenerate clean output

---

4. Contamination Avoidance (MANDATORY)

Do not copy patterns from existing project files that conflict with this contract.
Treat any discovered utility-framework artifacts as contamination and do not propagate them.
Do not "document" forbidden files; fix or neutralize them so the emitted solution cannot be broken by them.
Do not create workaround CSS files to bypass contamination; keep all styling in src/styles.scss.

---

5. Non-Negotiables

* **DELETE conflicting files FIRST** [NEW]
* Use code_search + docs_search first — actually invoke them; do not claim retrieval you did not perform
* Include an MCP-PROVENANCE block for every imported Carbon symbol
* Run code_audit after generation and resolve all error/warning issues before finishing
* For charts, use get_charts first
* Carbon tokens only
* Props validated
* Build succeeds first try
* Output only the 5 required files
* No narration
* Stop after emitting files


### Additional Hard Constraints

* Never reintroduce forbidden dependencies to make an old config pass.
* **If `vite.config.*` exists, DELETE it completely using execute_command - do not attempt to edit or neutralize it.**
* **If `postcss.config.*` exists, DELETE it completely using execute_command.**
* **If `tailwind.config.*` exists, DELETE it completely using execute_command.**
* Treat stale workspace config as contamination, not as required project setup.
* If deletion is impossible within constraints, output a hard BLOCKED status with offending file path; do not output partial code.
* Do not infer new requirements from errors. Only follow explicit requirements in this prompt.
* "Build-clean" means clean against actual workspace load behavior, including implicit Vite config loading.
* **Build-clean requires ALL config files to be deleted before code generation.**
* Build-clean requires zero Tailwind directives/imports in any CSS/SCSS Vite can read (not only emitted files); if found, delete those files first, then re-run validation.

---

6. Repository Sanitation (MANDATORY)

If the project already contains any Tailwind-related files or content (even if not imported), you MUST remove or neutralize them so Vite cannot discover them.

It is not acceptable to "document" forbidden files; you must fix them.

You MUST treat Vite as scanning and processing files beyond direct imports. Therefore, any file under src/ (and any CSS/SCSS anywhere) that contains Tailwind directives or Tailwind imports can break the build, even if not imported.

---

6a. Forbidden Content Scan (MANDATORY)

Before output, you MUST scan ALL files you output for these forbidden strings and patterns and ensure NONE exist anywhere (including comments and string literals):

* "tailwind"
* "tailwindcss"
* "@tailwind"
* "@tailwindcss"
* "@tailwindcss/vite"
* "postcss"
* "autoprefixer"
* "preflight"
* "prose"
* "@apply"
* utility-class patterns like: "p-", "m-", "gap-", "grid-cols-", "flex", "items-", "justify-", "text-", "bg-" when used as class utilities
* bracket-notation utilities (e.g., "top-[", "left-[", "z-[", "translate-[", "rotate-[", "w-[", "h-[")

If any appear, discard and regenerate.

---

6b. Output File Allowlist (HARD REQUIREMENT)

You may ONLY output exactly these files, and NO OTHERS:

* package.json
* index.html
* src/main.jsx
* src/App.jsx
* src/styles.scss

Do NOT create:

* src/styles/*.css
* src/design-system.css
* src/tailwind.css
* any extra CSS files
* postcss.config.*
* tailwind.config.*
* vite.config.*

If the design needs variables, define them inside src/styles.scss only.

---

6c. Build Validation Must Reflect Toolchain Behavior

Your build-clean claim must assume Vite may parse/transform any CSS/SCSS it encounters in the allowed files. Therefore, ensure the allowed files contain no Tailwind directives or imports and no references to "tailwindcss".

---

7. Shell Conformance Check (MANDATORY)

Before final output, verify all of the following are true:

* Emitted files are exactly:

  * package.json
  * index.html
  * src/main.jsx
  * src/App.jsx
  * src/styles.scss
* package.json contains only allowed dependencies.
* Import sources are only:

  * react
  * react-dom/client
  * @carbon/react
  * @carbon/icons-react
  * @carbon/styles
  * ./styles.scss
* No config files are emitted (vite/postcss/tailwind configs).
* No utility-class framework patterns or helper libs are present.
* Forbidden-content scan passes.
* Forbidden-string lint passes (defined below).
* Build simulation passes.

If any item fails, regenerate before output.

---

8. Build-Path Sanitization (MANDATORY)

The build will execute against existing workspace files, not only newly emitted files.

Before final output, DELETE existing build-path files so they cannot break build:

**MUST DELETE using execute_command:**
* vite.config.* (ALL variants: .js, .ts, .mjs, .cjs)
* postcss.config.* (ALL variants)
* tailwind.config.* (ALL variants)
* tsconfig.json
* src/main.tsx
* src/app/App.tsx
* src/app/ directory
* src/imports/ directory
* src/components/ui/ directory
* src/styles/*.css files (fonts.css, index.css, tailwind.css, theme.css)

**DO NOT attempt to "sanitize" or "edit" these files - DELETE them completely.**

**CRITICAL: Vite will load existing config files even if you don't emit new ones. Deletion is mandatory.**

Example deletion command:
```bash
rm -f vite.config.* postcss.config.* tailwind.config.* tsconfig.json src/main.tsx src/app/App.tsx && rm -rf src/app src/imports src/components/ui src/styles/fonts.css src/styles/index.css src/styles/tailwind.css src/styles/theme.css
```

---

9. Forbidden-String Lint (MANDATORY, PRE-EMISSION GATE)

Before producing the final answer, you MUST perform a strict forbidden-string lint across the ENTIRE output.

You MUST scan:

* package.json
* index.html
* src/main.jsx
* src/App.jsx
* src/styles.scss
* ALL comments and string literals
* ALL className values
* ALL CSS/SCSS

Forbidden tokens (case-insensitive):

* tailwind
* tailwindcss
* @tailwind
* @tailwindcss
* @tailwindcss/vite
* postcss
* autoprefixer
* preflight
* @import "tailwindcss"

Forbidden utility-class patterns:

* p-*
* px-*
* py-*
* m-*
* mx-*
* my-*
* gap-*
* grid-cols-*
* flex (when used as a utility class)
* items-*
* justify-*
* text-* (utility usage)
* bg-* (utility usage)

Carbon classnames (e.g., cds--*, bx--*) are allowed.

Fail-fast regeneration rule:

If ANY forbidden token or utility pattern is detected:

1. The output is INVALID.
2. You MUST discard the entire result.
3. You MUST regenerate from scratch without referencing the invalid output.
4. Repeat the lint until the output is clean.

You are NOT allowed to explain the failure - only fix and regenerate.