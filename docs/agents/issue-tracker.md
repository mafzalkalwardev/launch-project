# Issue tracker: GitHub

Issues for this repo live as GitHub issues. Use the `gh` CLI.

- Create: `gh issue create --title "..." --body "..."`
- Read: `gh issue view --json number,title,body,labels,comments`
- Blockers: `gh issue create --blocked-by <number>`
- Labels: `ready-for-agent` and `ready-for-human`
- Close finished work with a comment that names the commit, then `gh issue close`

File issues only in `mafzalkalwardev/launch-project`.
