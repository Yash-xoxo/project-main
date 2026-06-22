# Project Website

This project is configured to deploy as a static Next.js export on GitHub Pages.

## GitHub Pages setup

1. Push this repository to the `main` branch on GitHub.
2. Open `Settings -> Pages`.
3. Set `Source` to `GitHub Actions`.
4. Do not use `Deploy from a branch`. If GitHub Pages is pointed at the repository root, GitHub will render `README.md` instead of the exported site.
5. Run the `Deploy Next.js site to GitHub Pages` workflow, or push another commit to `main`.

## Notes

- The site is exported statically into the `out/` directory during CI.
- The Next.js config automatically uses the repository name as the GitHub Pages base path for project repositories like `Projects`, so the deployed site resolves correctly at `/Projects/`.
- Local development still runs normally with `pnpm dev`.


nice!!
