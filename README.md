<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset=".github/readme/logo-dark.svg">
    <img src=".github/readme/logo-light.svg" alt="Overdrive" width="440">
  </picture>
</p>

<p align="center">
  <b>Overdrive Community Revival for PS5.</b><br>
  Recovered, rebuilt, fixed and maintained for the PS5 homebrew community.
</p>

<p align="center">
  <a href="https://github.com/mushidani/overdrive-revival/releases/latest"><img src="https://img.shields.io/github/v/release/mushidani/overdrive-revival?style=for-the-badge&label=release&labelColor=0b0b0d&color=7447ad" alt="Latest release"></a>
  <a href="https://github.com/mushidani/overdrive-revival/releases"><img src="https://img.shields.io/github/downloads/mushidani/overdrive-revival/total?style=for-the-badge&label=downloads&labelColor=0b0b0d&color=2a2a2f" alt="Downloads"></a>
  <img src="https://img.shields.io/badge/version-1.1.1-a76cff?style=for-the-badge&labelColor=0b0b0d" alt="Version 1.1.1">
</p>

<p align="center">
  <a href="#community-revival">Community Revival</a> ·
  <a href="#features">Features</a> ·
  <a href="#installation">Installation</a> ·
  <a href="#troubleshooting">Troubleshooting</a> ·
  <a href="#build-it-yourself">Build it yourself</a> ·
  <a href="#credits">Credits</a>
</p>

> [!NOTE]
> Overdrive is an unofficial homebrew project.
>
> This repository does not host copyrighted games or other copyrighted third-party material. Any external content or services accessed through the application remain the responsibility of their respective providers and users.

---

## Community Revival

This repository is the community-maintained revival of **Overdrive**.

The recoverable Overdrive source was reconstructed by **MyLuxy**, who decompiled the application, recovered its source and rebuilt the project into a usable codebase.

The revival is maintained by **Dani / [mushidani](https://github.com/mushidani)**, who restored missing dependencies, fixed major runtime issues, updated the project and continues maintaining the revival.

### v1.1.1 Revival work

The revival includes several fixes and maintenance changes over the recovered codebase.

#### Homebrew extraction memory fix

Large Homebrew archives could fail during extraction with errors such as:

```text
Not enough memory to extract...
```

The image-loading system now continues managing its native image cache while an archive extraction memory hold is active.

This prevents unnecessary cached images from consuming memory needed by the archive extractor and allows significantly larger Homebrew packages to extract successfully.

The fix was tested successfully with archives exceeding **300 MiB**.

#### Failed-download retry recovery

A failed extraction could previously leave a completed download at its destination.

Trying the same download again could then fail before Overdrive's native recovery logic had a chance to verify the existing receipt.

The queue now allows the native recovery system to verify previously completed downloads before treating the destination as a collision.

This makes retrying failed Homebrew installations work correctly.

#### Restored build dependencies

Several dependencies referenced by the recovered project were no longer available from their original locations.

The revival restores the required build dependencies using maintained mirrors while keeping the expected pinned versions where possible.

This includes:

- `ps5-homebrew-ui`
- PS5 OpenGL SDK dependencies
- recovered build tooling required by the project

#### Credits and revival identity

Overdrive now includes a dedicated **Credits** page showing the people responsible for the recovery and revival:

- **Dani** — Revival & Maintenance
- **MyLuxy** — Source Recovery & Rebuild

The Settings screen also includes a dedicated Community Revival Credits tile.

---

<p align="center">
  <img src=".github/readme/discover.jpg" alt="Overdrive Discover page" width="100%">
</p>

<p align="center">
  <img src=".github/readme/browse.jpg" alt="Overdrive Browse page" width="49.5%">
  <img src=".github/readme/downloads.jpg" alt="Overdrive Downloads page" width="49.5%">
</p>

---

## Features

- Discover and browse Overdrive's catalog
- Homebrew section powered by community Homebrew sources
- Browse with filtering, sorting, scores and download sizes
- Downloads directly to the console
- Internal-storage and USB-storage support
- Live download speed and storage statistics
- Favorites
- Search with an on-screen keyboard
- Files page for viewing and cleaning storage
- Debrid-service integration
- Controller-first PS5 interface
- Multiple interface languages
- Native PS5 Homebrew installation through ShadowMount+
- Community-maintained v1.1.1 revival fixes

### Controller navigation

| Action | PS5 |
| --- | --- |
| Move | D-pad |
| Select | ✕ |
| Back | ○ |
| Change sections | L1 / R1 |
| Favorite | □ |

---

## Homebrew

Overdrive includes a Homebrew section for discovering and installing native PS5 Homebrew applications.

The application can download supported Homebrew packages, extract them and prepare them for installation through the existing PS5 Homebrew environment.

The v1.1.1 revival specifically improves Homebrew installation reliability by fixing extraction memory handling and failed-download retry recovery.

---

## Debrid services

Overdrive includes support for:

- TorBox
- Real-Debrid
- Premiumize

Accounts can be configured from the Downloads area.

Each service uses the user's own account credentials or API key, which are stored locally in Overdrive's settings.

### Automatic debrid conversion

When configured, supported catalog sources can be prepared through a debrid service before downloading.

Real-Debrid is attempted when configured and supported.

TorBox can be used when Real-Debrid is unavailable, unsupported for the source, not configured, or unable to convert the requested link.

Manual links and other explicitly selected download routes retain their intended behavior.

---

# Installation

## Requirements

You need:

- A jailbroken PS5
- [ShadowMount+](https://github.com/drakmor/ShadowMountPlus)
- [kstuff-lite](https://github.com/EchoStretch/kstuff-lite/releases)
- A USB drive or another supported method of transferring the Homebrew image
- `Overdrive.exfat`

> [!IMPORTANT]
> Compatibility depends on your PS5 firmware, jailbreak environment and the versions of the Homebrew payloads you use.

---

## Download

Download the latest `Overdrive.exfat` from:

**[Latest Overdrive Revival release](https://github.com/mushidani/overdrive-revival/releases/latest)**

Or use the direct release asset when available:

```text
https://github.com/mushidani/overdrive-revival/releases/latest/download/Overdrive.exfat
```

Do not unzip `Overdrive.exfat`.

It is already the Homebrew filesystem image.

---

## USB installation

Create a folder named:

```text
homebrew
```

at the top level of your USB drive.

Place `Overdrive.exfat` inside it:

```text
USB drive
└── homebrew
    └── Overdrive.exfat
```

The USB drive should use a filesystem supported by your PS5 Homebrew setup.

Start your jailbreak environment and make sure ShadowMount+ is running.

When ShadowMount+ detects the image, Overdrive should be mounted and become available from the PS5 home screen.

---

## Internal storage

Overdrive can also be stored in the PS5 Homebrew directory:

```text
/data/homebrew/Overdrive.exfat
```

You can transfer it using a compatible FTP or file-transfer tool available in your Homebrew environment.

---

# Updates

The revival releases are published here:

**https://github.com/mushidani/overdrive-revival/releases**

For the current revival build, installing the latest tested `Overdrive.exfat` release manually is the safest update method.

Replace the previous `Overdrive.exfat` with the new release and restart/reload the Homebrew environment if necessary.

The codebase contains Overdrive's existing update system and `update.zip` packaging support, but revival releases should only be treated as automatically updateable once the revival update feed is configured and verified.

---

# Troubleshooting

<details>
<summary><b>Overdrive does not appear on the home screen</b></summary>
<br>

Check that:

- ShadowMount+ is running.
- The folder is named exactly `homebrew`.
- `Overdrive.exfat` is inside that folder.
- The file is still named `Overdrive.exfat`.
- The file finished copying completely before the drive was connected to the PS5.

Example:

```text
USB
└── homebrew
    └── Overdrive.exfat
```

</details>

---

<details>
<summary><b>Overdrive opens but the interface does not load</b></summary>
<br>

The app image may be incomplete or corrupted.

Try:

1. Remove the existing `Overdrive.exfat`.
2. Download it again from the latest revival release.
3. Copy it back to the console.
4. Verify that the copied file size matches the downloaded file.
5. Restart the Homebrew environment.

</details>

---

<details>
<summary><b>A Homebrew package says there is not enough memory to extract</b></summary>
<br>

v1.1.1 includes a fix for the extraction-memory issue that affected large Homebrew archives.

Make sure you are running the latest **Overdrive Revival** release.

If the problem still occurs, confirm that the installed version is actually:

```text
1.1.1
```

or newer.

</details>

---

<details>
<summary><b>A failed Homebrew installation will not retry</b></summary>
<br>

Older builds could leave a completed download behind after extraction failed.

The revival now allows Overdrive's recovery logic to inspect that existing download instead of immediately treating it as an invalid destination collision.

Upgrade to v1.1.1 or newer.

</details>

---

<details>
<summary><b>How do I remove Overdrive?</b></summary>
<br>

Remove:

```text
Overdrive.exfat
```

from the `homebrew` directory first.

Then remove the installed application/icon from the console if necessary.

If the image remains in the monitored Homebrew directory, ShadowMount+ may detect and mount it again.

</details>

---

# Build it yourself

## Repository

Clone the revival repository:

```sh
git clone https://github.com/mushidani/overdrive-revival.git
cd overdrive-revival
```

The main revival development branch may be named:

```text
overdrive-revival
```

depending on the repository's current default-branch configuration.

---

## Project layout

| Path | Description |
| --- | --- |
| `app/` | Overdrive application source, UI, state, assets and application configuration |
| `app/ui/CreditsScreen.jsx` | Community Revival Credits screen |
| `app/assets/credits/` | Revival contributor artwork |
| `ps5-react/` | Vendored PS5 React framework |
| `packaging/` | Build and `.exfat` packaging tools |
| `.github/workflows/build.yml` | GitHub Actions build workflow |
| `app/version.js` | User-facing Overdrive version |
| `app/app.json` | PS5 application metadata/version |

---

## Initial setup

From the repository root:

```sh
npm run setup
```

This installs the required project dependencies.

On Linux, some setup steps may request `sudo`.

---

## Development preview

```sh
npm run dev
```

or:

```sh
npm run preview
```

### Development controls

| Action | Keyboard | PS5 |
| --- | --- | --- |
| Move focus | Arrow keys | D-pad |
| Select | Enter / Space | ✕ |
| Back | Backspace | ○ |
| Sections | Q / E | L1 / R1 |
| Favorite | F | □ |
| Quit preview | Escape | PS button / exit environment |

---

## Building

Build the PS5 app and package it:

```sh
npm run build
```

The final files are created in the repository root:

```text
Overdrive.exfat
update.zip
```

The PS5 application build itself is produced under:

```text
ps5-react/dist/PPSA99058
```

You can build only the PS5 application with:

```sh
npm run build:app
```

---

## Clean WSL/Linux build environment

If Windows-installed development tools or environment variables interfere with the Linux build under WSL, the revival has been successfully built with a clean environment similar to:

```sh
env \
  -u CPATH \
  -u CPLUS_INCLUDE_PATH \
  -u C_INCLUDE_PATH \
  -u LIBRARY_PATH \
  -u PKG_CONFIG_PATH \
  PATH="$HOME/.nvm/versions/node/v22.23.4/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin" \
  npm run build
```

The exact Node path may differ on your system.

---

## Building the `.exfat`

The standard build command:

```sh
npm run build
```

builds the PS5 application and then packages:

```text
Overdrive.exfat
```

along with:

```text
update.zip
```

The `.exfat` image is the file used by ShadowMount+.

---

# Source recovery

Overdrive's recoverable source exists thanks to **MyLuxy**.

The application was reconstructed by decompiling/recovering the JavaScript bundled inside the original application binary and rebuilding it into a usable source tree.

Because bundling destroys some original source-level information, the recovered project cannot reproduce every detail of the original authoring source exactly.

For example, recovered code may contain compiled JSX-runtime forms such as:

```js
(0, jsx)(View, {
  ...
})
```

rather than the original JSX syntax.

The recovered source nevertheless provided the foundation that made the Community Revival possible.

---

# Revival development

The Community Revival is maintained by **Dani / mushidani**.

Revival work includes:

- restoring unavailable build dependencies
- maintaining working dependency mirrors
- fixing PS5 Homebrew extraction memory behavior
- fixing retry/recovery behavior for failed installations
- maintaining the build environment
- updating the Credits/About experience
- maintaining release builds
- continuing compatibility fixes as issues are discovered

---

# Credits

### Dani

**Revival & Maintenance**

GitHub: [@mushidani](https://github.com/mushidani)

Revived Overdrive, restored its dependencies, fixed major issues and maintains the Community Revival.

---

### MyLuxy

**Source Recovery & Rebuild**

GitHub: [@MyLuxy](https://github.com/MyLuxy)

Decompiler/recovery work by MyLuxy reconstructed Overdrive's source and rebuilt the project into the codebase that made this revival possible.

---

## Additional projects and contributors

- [ps5-react](https://github.com/half144/ps5-react) — framework used by Overdrive
- [ShadowMount+](https://github.com/drakmor/ShadowMountPlus) by drakmor
- [kstuff-lite](https://github.com/EchoStretch/kstuff-lite)
- [PS5 Homebrew Catalog](https://github.com/darkxex/ps5-homebrew-catalog)
- [QR Code generator](https://github.com/nayuki/QR-Code-generator) by Project Nayuki

The vendored `ps5-react/` project carries its own licensing and attribution files.

Third-party dependency notices should remain distributed with the application as required by their respective licenses.

---

# Version

Current Community Revival version:

```text
Overdrive v1.1.1
```

Repository:

```text
https://github.com/mushidani/overdrive-revival
```

Releases:

```text
https://github.com/mushidani/overdrive-revival/releases
```

---

<sub>
Overdrive Community Revival is an unofficial homebrew project and is not affiliated with or endorsed by Sony Interactive Entertainment. PlayStation and PS5 are trademarks of Sony Interactive Entertainment.
</sub>
