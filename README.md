# claude-ui-ux-design-kit

One command that installs a reusable UI/UX kit for Claude Code.

```
npx claude-ui-ux-design-kit
```

Installs into `~/.claude` (all projects):

| Item | What it does |
| --- | --- |
| `skills/ui-ux-design-kit` | Designs and redesigns screens with one design system per project, all states, anti-generic-AI rules and a render-and-check step |
| `skills/ui-ux-audit` | Reviews a screen and ranks the fixes |
| `commands/design-init.md` | `/design-init <product and audience>` creates `DESIGN.md` and tokens for the project |

## Options

```
npx claude-ui-ux-design-kit --project     # install only in ./.claude of the current project
npx claude-ui-ux-design-kit --uninstall   # remove (add --project for project level)
```

Set `CLAUDE_CONFIG_DIR` to use a different Claude Code config folder.
Existing files that differ are backed up as `.bak` before being updated.

After installing, restart Claude Code and run, in any project:

```
/design-init a booking app for dental clinics, used by receptionists on desktop
```
