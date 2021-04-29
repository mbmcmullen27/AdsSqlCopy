const vscode = require('vscode');

// Note: uncomment when you want to use Azure Data Studio APIs. Commenting now to avoid strict linting issues
// const azdata = require('azdata');

function activate(context) {
    context.subscriptions.push(vscode.commands.registerCommand('copyassqlvalues.copy', () => {
			vscode.env.clipboard.readText()
			.then((content)=>{
				//don't modify the clipboard if its already formatted as a list
				if(!content.match(/\(('.*'),?\)/)){
					vscode.window.showInformationMessage('making paste...');

					//split by lines expecting windows-style line endings...
					var tokens = content.split('\r\n')
					tokens = tokens.filter((token)=>{return token!=null && token!=''})

					vscode.env.clipboard.writeText(
						//sql server escapes ' by doubling up '' replace them in each token
						'('+tokens.map(value=>'\''+value.replace(/'/g,'\'\'')+'\'')
						.join()+')'
					)	
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