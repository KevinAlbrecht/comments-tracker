import * as vscode from "vscode";
import { MyTreeDataProvider, Dependency } from "./tree-data-provider";

export class Vier {
    private vierViewer: vscode.TreeView<Dependency>;

    constructor(context: vscode.ExtensionContext) {
        const treeDataProvider = new MyTreeDataProvider();
        context.subscriptions.push(vscode.window.registerTreeDataProvider('vier', treeDataProvider));
        this.vierViewer = vscode.window.createTreeView('vier', { treeDataProvider });

        this.vierViewer.reveal(new Dependency("label", "0.1", vscode.TreeItemCollapsibleState.None));
        treeDataProvider.refresh();
    }
}