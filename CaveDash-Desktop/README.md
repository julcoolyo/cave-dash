# Cave Dash — Website + Windows Installer

This bundle includes:
- The Cave Dash Electron game source.
- A styled Cave Dash website in `docs/index.html`.
- GitHub Actions workflows to publish the website and build a Windows installer.
- The Windows installer configuration creates desktop and Start Menu shortcuts.

**Important:** This bundle does not contain a compiled `.exe`, and the website is not online until you publish it to a hosting account. I cannot publish it to your personal account without your participation. A build made by this project may be unsigned and may still be blocked by Smart App Control. Do not disable Windows security. Signing with a trusted code-signing certificate is a separate step and does not guarantee Smart App Control approval.

## Publish the website and build the installer with GitHub

1. Sign in or create an account at https://github.com/
2. Create a new **public** repository named `cave-dash`.
3. Upload the contents of this `CaveDash-Desktop` folder to the repository root. Ensure `package.json`, `app`, `docs`, and `.github` are at the root level (not nested in another `CaveDash-Desktop` folder).
4. In the repository, go to **Settings → Pages**. If prompted, set the source to **GitHub Actions**.
5. Push or upload the files to the `main` branch. The **Publish Cave Dash website** workflow should run under the **Actions** tab. When it completes, GitHub displays the site URL, usually `https://YOUR-GITHUB-USERNAME.github.io/cave-dash/`.
6. To build an installer, open **Actions → Build and release Cave Dash for Windows → Run workflow**. This creates an installer artifact you can download from the completed workflow run.
7. To publish a downloadable release, create and push a tag named `v1.0.0`. The **Build and release Cave Dash for Windows** workflow builds the installer and attaches it to a GitHub Release.

## Website download link

Open `docs/index.html` and replace `YOUR-GITHUB-USERNAME` in the download URL with your GitHub username. Once a release has been published, the latest-release page will show the real installer.

## Local build alternative

On Windows with Node.js LTS installed, open Command Prompt in the project root (the folder containing `package.json`) and run:

```bat
npm install
npm run dist:win
```

The installer is written to the `release` folder.

## Smart App Control

The installer configuration alone does not make the program trusted. The app and installer may require a trusted code-signing certificate to improve trust. Do not turn Smart App Control off just to install this project.
