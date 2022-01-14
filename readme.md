# FIM Blocks
Contributors:      Melissa Hiatt, Faith in Marketing
Tags:              block
Tested up to:      5.8.0
Stable tag:        2.0.1
License:           GPL-2.0-or-later
License URI:       https://www.gnu.org/licenses/gpl-2.0.html

Custom Gutenberg blocks for client sites written with ESNext standard and JSX support.

## Description
This is a rebuild of the original FIM Blocks using the official Wordpress `create-block` package.

**This plugin contains the following blocks:**
- Google PDF Embed: Embeds a Google PDF via a public-viewable link
- Mobile Button Group / Mobile Buttons: A button template for mobile landing pages.
- TODO. CFF Album Embed: *This may not be supported in the future*

## Changelog
### 2.0.1
Rebuild of all blocks. Fixed deprecations

**Google PDF Embed:**
- Renders iframe in editor
- Uses popover to edit URL
- New embed url that includes resourcekey
- Fixed error that breaks Gutenberg when URL field is empty on save
- Added deprecation for older blocks

**Mobile Button Group / Mobile Buttons:**
- Added ability to upload an image for an icon.
- Updated CSS

### 1.0 - 2.0
Untracked Changes

### 1.0
Release

