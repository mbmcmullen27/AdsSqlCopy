# copyAsSqlValues README
lil extension that fills the great void left by SSMS boost liscense expiration and the loss of the 'Copy as SQL values list' shortcut. Cooler coders code in (vs)code.

![sqlCopy](./sqlValuesCopyAs.gif)

## Features

- Adds a command and key binding to copy a selection of lines as a list of sql formated strings 
- Also works with grid selection
- Edits the selection in place on your clipboard (allows you to paste into other editors)

## Instructions

This extension was scaffoled with yeoman code generator and built with vsce
To build from source:

```bash
# if you do not already have vsce installed
npm install -g vsce

# then execute vsce package inside the root directory of this cloned repo
cd /path/to/AdsSqlCopy/
vsce package
```
Then from vscode extension menu, select options > "install from VSIX..."

see [vsc extension quickstart](./vsc-extension-quickstart.md) for more information about vs code extension development and debugging (provided by yo code-generator)

-----------------------------------------------------------------------------------------------------------

**proving once and for all that DANK is a c-tier vscode user at best!**

