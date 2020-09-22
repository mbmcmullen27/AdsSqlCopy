// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');

// The module 'azdata' contains the Azure Data Studio extensibility API
// This is a complementary set of APIs that add SQL / Data-specific functionality to the app
// Import the module and reference it with the alias azdata in your code below

// Note: uncomment when you want to use Azure Data Studio APIs. Commenting now to avoid strict linting issues
const azdata = require('azdata');

function activate(context) {
    context.subscriptions.push(vscode.commands.registerCommand('copyassqlvalues.copy', () => {
			vscode.env.clipboard.readText()
			.then((content)=>{
				console.log(JSON.stringify(content))
				if(!content.match(/\(('.*'),?\)/)){
					vscode.window.showInformationMessage('making paste...');
					var tokens = content.split('\r\n')
					vscode.env.clipboard.writeText('('+tokens.map(value=>'\''+value+'\'').join()+')')
					.then(()=>{
						vscode.commands.executeCommand('editor.action.clipboardPasteAction')
					})
				}else{
					vscode.window.showInformationMessage('eating paste...');
					vscode.commands.executeCommand('editor.action.clipboardPasteAction')
				} 				
			})
		})
    );

}
exports.activate = activate;

// this method is called when your extension is deactivated
function deactivate() {
}
exports.deactivate = deactivate;