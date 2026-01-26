import type { LearnLanguage } from "@/data/mockData";

export const topicsOfGit = [
  "Introduction",
  "Installing Git",
  "Basic Git commands",
  "Git configuration",
  "Git repositories",
  "Staging changes",
  "Committing changes",
  "Viewing commit history",
  "Branching",
  "Merging branches",
  "Resolving merge conflicts",
  "Git workflows",
  "Remote repositories",
  "Cloning repositories",
  "Pushing changes",
  "Pulling changes",
  "Forking repositories",
  "Creating pull requests",
  "Git tags",
  "Rebasing",
  "Undoing changes",
  "Git stash",
  "Git hooks",
  "Gitignore",
  "GitLab/GitHub basics",
  "Advanced Git commands",
];

export const topicContentsOfGit: {
  [key: string]: { title: string; content: string; code?: string };
} = {
  "Introduction": {
    title: "Introduction",
    content: `Git is a distributed version control system designed to handle everything from small to very large projects with speed and efficiency. It allows multiple people to work on a project simultaneously, tracks changes to files, and enables collaborative work by merging changes from different contributors.

Key Concepts:
1. Version Control - Git helps track changes to files over time, allowing you to revert to previous versions, compare changes, and understand the history of a project.
2. Distributed System - Unlike centralized version control systems, Git allows each contributor to have a full copy of the repository, including its history. This enhances redundancy and reliability.
3. Repository - A Git repository is a directory that contains all of your project files and their history. Repositories can be local (on your machine) or remote (on a server).
4. Commit - A commit is a snapshot of your project at a particular point in time. Each commit is identified by a unique hash and includes a message describing the changes.
5. Branching - Branching allows you to create separate lines of development within a repository. You can work on new features or bug fixes in a branch without affecting the main project.
6. Merging - When a branch is ready, you can merge its changes back into the main branch (usually called "main" or "master"), combining the work from different branches.

Benefits of Using Git:
- Collaboration - Multiple developers can work on the same project simultaneously, with Git managing and integrating their changes.
- History Tracking - Git keeps a detailed history of changes, making it easy to track progress and understand the evolution of a project.
- Branching and Merging - Git's branching model allows for isolated development, feature experimentation, and easy integration of changes.

Git is essential for modern software development, providing tools to manage code changes, collaborate with others, and maintain a clean and organized project history.`,
    code: `# Initialize a new Git repository
git init

# Check the status of the repository
git status

# Add files to staging area
git add <filename>

# Commit changes to the repository
git commit -m "Initial commit"

# View commit history
git log

# Create a new branch
git branch <branch-name>

# Switch to a different branch
git checkout <branch-name>

# Merge changes from another branch
git merge <branch-name>`
  },

  "Installing Git": {
    title: "Installing Git",
    content: `Windows:
1. Download the Git installer from https://git-scm.com/download/win
2. Run the installer and follow the on-screen instructions
3. During installation, you can choose the default options
4. Open a command prompt and run "git --version" to verify

Linux (Debian/Ubuntu):
1. Open a terminal window
2. Update your package list: sudo apt update
3. Install Git: sudo apt install git
4. Verify the installation: git --version

Linux (Fedora):
1. Open a terminal window
2. Install Git: sudo dnf install git
3. Verify the installation: git --version

Linux (Arch):
1. Open a terminal window
2. Install Git: sudo pacman -S git
3. Verify the installation: git --version

Mac:
1. Open the Terminal application
2. Install Git using Homebrew: brew install git
3. Verify the installation: git --version`,
    code: `# Verify Git Installation
git --version

# View Git configuration
git config --list`
  },

  "Basic Git commands": {
    title: "Basic Git commands",
    content: `Initialize a Repository:
Create a new Git repository in your project directory using "git init".

Clone a Repository:
Create a local copy of a remote repository using "git clone <repository_url>".

Check Repository Status:
View the status of your working directory and staging area using "git status".

Add Changes:
Stage specific files using "git add <file_name>" or all changes using "git add .".

Commit Changes:
Save staged changes to the repository using "git commit -m 'Your commit message'".

View Commit History:
Display the commit history using "git log" or "git log --oneline" for a compact view.

Create a Branch:
Create a new branch using "git branch <branch_name>".

Switch Branches:
Change to a different branch using "git checkout <branch_name>" or "git switch <branch_name>".

Merge Branches:
Combine changes from another branch using "git merge <branch_name>".

Delete a Branch:
Remove a branch using "git branch -d <branch_name>".

Fetch Changes :
Download changes from the remote repository without merging using "git fetch".

Pull Changes:
Download and merge changes from the remote repository using "git pull".

Push Changes:
Upload your local changes to the remote repository using "git push".`,
    code: `# Initialize a repository
git init

# Clone a repository
git clone <repository_url>

# Check status
git status

# Add changes
git add <file_name>
git add .

# Commit changes
git commit -m "Your commit message"

# View history
git log
git log --oneline

# Create a branch
git branch <branch_name>

# Switch branches
git checkout <branch_name>
git switch <branch_name>

# Merge branches
git merge <branch_name>

# Delete a branch
git branch -d <branch_name>

# Fetch, pull, and push
git fetch
git pull
git push`
  },

  "Git configuration": {
    title: "Git configuration",
    content: `Git configuration is essential for setting up your identity, preferences, and behavior of Git on your system. Configurations can be applied at three levels: system, global, and local.

Set Your Name and Email:
Configure your identity for all commits using "git config --global user.name" and "git config --global user.email".

View Current Configuration:
Display all Git configurations using "git config --list".

Set Default Text Editor:
Set your preferred text editor for Git operations using "git config --global core.editor".

Set Default Merge Tool:
Specify your default merge tool using "git config --global merge.tool".

Create Aliases:
Create shortcuts for commonly used Git commands, such as "git config --global alias.co checkout".

Configure Line Endings:
Handle line endings properly across different operating systems. For Windows, use "git config --global core.autocrlf true". For macOS and Linux, use "git config --global core.autocrlf input".`,
    code: `# Set your name and email
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"

# View configuration
git config --list

# Set default editor
git config --global core.editor "vim"

# Set default merge tool
git config --global merge.tool "vimdiff"

# Create aliases
git config --global alias.co checkout
git config --global alias.br branch
git config --global alias.ci commit
git config --global alias.st status

# Configure line endings (Windows)
git config --global core.autocrlf true

# Configure line endings (macOS/Linux)
git config --global core.autocrlf input`
  },

  "Git repositories": {
    title: "Git repositories",
    content: `A Git repository is a storage space where your project files and their history are stored. Repositories can be local (on your machine) or remote (hosted on a server). They track changes to your project over time, allowing collaboration and the ability to revert to previous versions.

Creating a Local Repository:
Initialize a new Git repository in your project directory using "git init". This creates a hidden .git directory containing all necessary version control files.

Cloning a Remote Repository:
Create a local copy of a remote repository using "git clone <repository_url>". This downloads all files and history from the remote repository.

Viewing the Current Repository:
Check the current repository status using "git status" to see which files have been modified, staged, or are untracked.

Adding a Remote Repository:
Link a remote repository to your local repository using "git remote add <remote_name> <repository_url>". For example: "git remote add origin https://github.com/user/repo.git".

Viewing Remote Repositories:
Display all remote repositories linked to your local repository using "git remote -v".

Removing a Remote Repository:
Unlink a remote repository using "git remote remove <remote_name>".`,
    code: `# Initialize a repository
git init

# Clone a remote repository
git clone <repository_url>

# Check repository status
git status

# Add a remote repository
git remote add <remote_name> <repository_url>

# View remote repositories
git remote -v

# Remove a remote repository
git remote remove <remote_name>`
  },

  "Staging changes": {
    title: "Staging changes",
    content: `Staging changes is the process of adding modifications to the staging area before committing them to the repository. This allows you to group related changes into a single commit.

Add a Single File:
Stage a specific file using "git add <file_name>".

Add All Changes:
Stage all changes in the current directory and subdirectories using "git add .".

Add Changes Interactively:
Review and selectively stage changes using "git add -i".

Unstage Changes:
Remove files from the staging area without discarding changes using "git reset <file>".

View Staged Changes:
Display the changes that have been staged using "git diff --staged".`,
    code: `# Stage a single file
git add <file_name>

# Stage all changes
git add .

# Stage interactively
git add -i

# Unstage changes
git reset <file>

# View staged changes
git diff --staged`
  },

  "Committing changes": {
    title: "Committing changes",
    content: `Committing changes saves your staged modifications to the repository history. Each commit is a snapshot of your project at that point in time and includes a message describing the changes.

Basic Commit:
Save staged changes using "git commit -m 'Your commit message'".

Commit with Extended Message:
Open your default editor to write a more detailed commit message using "git commit".

Commit All Changes:
Stage and commit all modified files in one step using "git commit -am 'Your commit message'".

Amend the Last Commit:
Modify the most recent commit using "git commit --amend". This allows you to add forgotten changes or fix the commit message.

View Commit Diff:
Display what was changed in the last commit using "git show".`,
    code: `# Basic commit
git commit -m "Your commit message"

# Commit with detailed message
git commit

# Stage and commit all changes
git commit -am "Your commit message"

# Amend the last commit
git commit --amend

# View the last commit
git show`
  },

  "Viewing commit history": {
    title: "Viewing commit history",
    content: `Git keeps a detailed history of all commits made to a repository. Viewing this history allows you to understand the changes made over time and who made them.

Basic Log:
Display the commit history in reverse chronological order using "git log".

One-line Summary:
Display commits with one-line summaries using "git log --oneline".

Detailed Log:
Display a more detailed log with file changes using "git log -p".

Specific Number of Commits:
Display a specific number of recent commits using "git log -n <number>".

Filtering by Author:
Display commits by a specific author using "git log --author='Author Name'".

Filtering by File:
Display commits that affected a specific file using "git log -- <file_name>".`,
    code: `# View commit history
git log

# One-line summaries
git log --oneline

# Detailed log with changes
git log -p

# View specific number of commits
git log -n <number>

# Filter by author
git log --author="Author Name"

# Filter by file
git log -- <file_name>`
  },

  "Branching": {
    title: "Branching",
    content: `Branching allows you to create separate lines of development within a Git repository. This is useful for working on new features or bug fixes without affecting the main codebase.

Create a New Branch:
Create a new branch using "git branch <branch_name>".

Switch to a Branch:
Change to an existing branch using "git checkout <branch_name>" or "git switch <branch_name>".

Create and Switch to a New Branch:
Create and immediately switch to a new branch using "git checkout -b <branch_name>" or "git switch -c <branch_name>".

List All Branches:
Display all branches in the repository using "git branch".

Delete a Branch:
Remove a branch using "git branch -d <branch_name>". Use "git branch -D <branch_name>" to force delete.

Rename a Branch:
Rename a branch using "git branch -m <old_name> <new_name>".`,
    code: `# Create a new branch
git branch <branch_name>

# Switch to a branch
git checkout <branch_name>
git switch <branch_name>

# Create and switch to a new branch
git checkout -b <branch_name>
git switch -c <branch_name>

# List all branches
git branch

# Delete a branch
git branch -d <branch_name>
git branch -D <branch_name>

# Rename a branch
git branch -m <old_name> <new_name>`
  },

  "Merging branches": {
    title: "Merging branches",
    content: `Merging is the process of combining changes from different branches into one branch. It allows you to integrate new features, bug fixes, or other updates.

Basic Merge:
Merge a specified branch into the current branch using "git merge <branch_name>".

Fast-Forward Merge:
If the current branch has not diverged, Git performs a fast-forward merge, moving the branch pointer forward.

Three-Way Merge:
If branches have diverged, Git performs a three-way merge, creating a new commit combining changes from both branches.

Merge with Commit Message:
Add a custom commit message during merge using "git merge <branch_name> -m 'Merge commit message'".

View Merge History:
Display the history of merges using "git log --merges".`,
    code: `# Merge a branch
git merge <branch_name>

# Merge with custom message
git merge <branch_name> -m "Merge commit message"

# View merge history
git log --merges`
  },

  "Resolving merge conflicts": {
    title: "Resolving merge conflicts",
    content: `Merge conflicts occur when Git cannot automatically resolve differences between branches. Manual intervention is required to resolve these conflicts.

Identify Conflicts:
When a conflict occurs, Git marks conflicting files and stops the merge. Check the status using "git status".

Resolve Conflicts:
Open conflicting files and look for conflict markers (<<<<<<, ======, >>>>>>). Edit the files to keep the desired changes and remove the markers.

Mark Conflicts as Resolved:
After resolving conflicts, stage the files using "git add <conflicted_file>".

Complete the Merge:
Finish the merge by committing the resolved changes using "git commit".

Abort the Merge:
If you want to cancel the merge and return to the pre-merge state, use "git merge --abort".`,
    code: `# Identify conflicts
git status

# Mark conflicts as resolved
git add <conflicted_file>

# Complete the merge
git commit

# Abort the merge
git merge --abort`
  },

  "Git workflows": {
    title: "Git workflows",
    content: `Git workflows define a standard way of using Git in a project. They help manage branches, collaborate with team members, and ensure a smooth development process.

Centralized Workflow:
A simple workflow where all changes are pushed to a central repository. Suitable for small teams or solo projects.

Feature Branch Workflow:
Each new feature is developed in its own branch. Once complete, the feature is merged into the main branch, keeping the main branch stable.

Gitflow Workflow:
A comprehensive workflow with separate branches for features, releases, and hotfixes. Suitable for projects with scheduled releases.

Forking Workflow:
Each developer forks the main repository and works on their own copy. Changes are integrated back to the main repository through pull requests. Common in open-source projects.

Trunk-Based Development:
All developers commit directly to the main branch frequently. Suitable for teams with strong continuous integration practices.`,
    code: `# Feature Branch Workflow
git checkout -b feature/new-feature
# Make changes and commit
git add .
git commit -m "Add new feature"
git push origin feature/new-feature
# Create pull request on GitHub

# Gitflow Workflow
git checkout -b feature/feature-name develop
# Make changes
git checkout develop
git merge feature/feature-name
git checkout -b release/1.0.0 develop
git checkout main
git merge release/1.0.0`
  },

  "Remote repositories": {
    title: "Remote repositories",
    content: `Remote repositories are copies of your project hosted on a server, allowing collaboration with other developers. Common remote hosting services include GitHub, GitLab, and Bitbucket.

Add a Remote:
Link a remote repository to your local repository using "git remote add <name> <url>". The default remote is typically named "origin".

View Remotes:
Display all configured remote repositories using "git remote -v".

Fetch from Remote:
Download changes from the remote repository without merging using "git fetch".

Pull from Remote:
Download and merge changes from the remote repository using "git pull".

Push to Remote:
Upload your local commits to the remote repository using "git push".

Set Upstream Branch:
Configure the remote branch for your local branch using "git push -u origin <branch_name>".`,
    code: `# Add a remote
git remote add origin <repository_url>

# View remotes
git remote -v

# Fetch changes
git fetch

# Pull changes
git pull

# Push changes
git push

# Push and set upstream
git push -u origin <branch_name>`
  },

  "Cloning repositories": {
    title: "Cloning repositories",
    content: `Cloning creates a complete local copy of a remote repository, including all files and commit history. This allows you to start working on a project immediately.

Clone a Repository:
Create a local copy using "git clone <repository_url>".

Clone into a Specific Directory:
Clone into a specific directory using "git clone <repository_url> <directory_name>".

Clone with Depth:
Clone with limited commit history using "git clone --depth <number> <repository_url>". Useful for large repositories.

Clone a Specific Branch:
Clone only a specific branch using "git clone --branch <branch_name> <repository_url>".

Verify the Clone:
Check the cloned repository status using "cd <directory_name>" followed by "git status".`,
    code: `# Clone a repository
git clone <repository_url>

# Clone into specific directory
git clone <repository_url> <directory_name>

# Clone with depth
git clone --depth 1 <repository_url>

# Clone specific branch
git clone --branch <branch_name> <repository_url>`
  },

  "Pushing changes": {
    title: "Pushing changes",
    content: `Pushing uploads your local commits to the remote repository, making them available to other collaborators.

Basic Push:
Upload your commits to the remote repository using "git push".

Push to a Specific Remote and Branch:
Upload to a specific remote and branch using "git push <remote> <branch>".

Push All Branches:
Upload all local branches to the remote using "git push --all".

Push Tags:
Upload tags to the remote using "git push origin <tag_name>" or "git push origin --tags".

Force Push:
Overwrite remote history with local history using "git push --force". Use with caution as this can overwrite others' work.

Set Upstream and Push:
Set the upstream branch and push in one command using "git push -u origin <branch_name>".`,
    code: `# Basic push
git push

# Push to specific remote and branch
git push origin main

# Push all branches
git push --all

# Push tags
git push origin <tag_name>
git push origin --tags

# Force push (use with caution)
git push --force

# Set upstream and push
git push -u origin <branch_name>`
  },

  "Pulling changes": {
    title: "Pulling changes",
    content: `Pulling downloads and integrates changes from the remote repository into your local repository.

Basic Pull:
Download and merge remote changes using "git pull".

Pull from a Specific Remote and Branch:
Pull from a specific remote and branch using "git pull <remote> <branch>".

Pull with Rebase:
Download changes and rebase your local commits using "git pull --rebase". This creates a cleaner history than merge.

Fetch Before Pull:
Download changes without merging using "git fetch", then manually merge using "git merge".

Update Tracking Branches:
Update all remote tracking branches using "git pull --all".`,
    code: `# Basic pull
git pull

# Pull from specific remote and branch
git pull origin main

# Pull with rebase
git pull --rebase

# Fetch only
git fetch

# Merge after fetch
git merge origin/main`
  },

  "Forking repositories": {
    title: "Forking repositories",
    content: `Forking creates a personal copy of someone else's repository. This allows you to work independently without affecting the original project.

Fork a Repository:
Click the "Fork" button on the repository hosting platform (GitHub, GitLab, etc.) to create your own copy.

Clone Your Fork:
Create a local copy of your forked repository using "git clone <your_fork_url>".

Add Upstream Remote:
Link the original repository as "upstream" using "git remote add upstream <original_repo_url>".

Fetch Updates from Upstream:
Download updates from the original repository using "git fetch upstream".

Sync Your Fork:
Keep your fork updated with the original repository using "git merge upstream/main".`,
    code: `# Clone your fork
git clone <your_fork_url>

# Add upstream remote
git remote add upstream <original_repo_url>

# Fetch upstream changes
git fetch upstream

# Sync your fork
git checkout main
git merge upstream/main
git push origin main`
  },

  "Creating pull requests": {
    title: "Creating pull requests",
    content: `Pull requests allow you to propose changes to a repository and request that they be reviewed and merged.

Create a Feature Branch:
Create and switch to a new branch for your changes using "git checkout -b feature/your-feature".

Make Changes and Commit:
Make your changes and commit them with clear, descriptive messages.

Push Your Branch:
Upload your branch to the remote repository using "git push origin feature/your-feature".

Create Pull Request:
Go to the repository on GitHub/GitLab and click "New Pull Request" or "Create Merge Request".

Describe Your Changes:
Fill in the pull request title and description, explaining what changes you made and why.

Request Review:
Assign reviewers to examine your changes before merging.

Address Feedback:
Make additional commits based on reviewer feedback, which will automatically update the pull request.`,
    code: `# Create and switch to feature branch
git checkout -b feature/your-feature

# Make changes and commit
git add .
git commit -m "Implement your feature"

# Push to remote
git push origin feature/your-feature

# After addressing feedback
git add .
git commit -m "Address review feedback"
git push origin feature/your-feature`
  },

  "Git tags": {
    title: "Git tags",
    content: `Tags mark specific points in your repository's history, typically used to mark release versions.

Create a Lightweight Tag:
Create a simple tag using "git tag <tag_name>".

Create an Annotated Tag:
Create a tag with metadata using "git tag -a <tag_name> -m 'Tag message'".

List Tags:
Display all tags in the repository using "git tag".

Push Tags:
Upload a specific tag using "git push origin <tag_name>" or all tags using "git push origin --tags".

Delete a Local Tag:
Remove a local tag using "git tag -d <tag_name>".

Delete a Remote Tag:
Remove a remote tag using "git push origin --delete <tag_name>".

Checkout a Tag:
Switch to a specific tag using "git checkout <tag_name>".`,
    code: `# Create a lightweight tag
git tag <tag_name>

# Create an annotated tag
git tag -a <tag_name> -m "Tag message"

# List tags
git tag

# Push a tag
git push origin <tag_name>

# Push all tags
git push origin --tags

# Delete local tag
git tag -d <tag_name>

# Delete remote tag
git push origin --delete <tag_name>`
  },

  "Rebasing": {
    title: "Rebasing",
    content: `Rebasing moves or combines a sequence of commits to a new base commit. It maintains a cleaner project history compared to merging.

Basic Rebase:
Rebase your current branch onto another branch using "git rebase <branch_name>".

Interactive Rebase:
Edit, squash, or reorder commits using "git rebase -i <commit_hash>".

Rebase onto a Remote Branch:
Rebase onto a remote branch using "git rebase origin/<branch_name>".

Continue Rebase After Conflict:
After resolving merge conflicts, continue rebasing using "git rebase --continue".

Abort Rebase:
Cancel the rebasing process using "git rebase --abort".

Autosquash:
Automatically squash commits marked with fixup or squash using "git rebase -i --autosquash".`,
    code: `# Basic rebase
git rebase <branch_name>

# Interactive rebase
git rebase -i <commit_hash>

# Rebase onto remote branch
git rebase origin/<branch_name>

# Continue after conflict
git rebase --continue

# Abort rebase
git rebase --abort

# Autosquash
git rebase -i --autosquash`
  },

  "Undoing changes": {
    title: "Undoing changes",
    content: `Git provides several ways to undo changes depending on when they were made.

Discard Unstaged Changes:
Revert unstaged changes to a file using "git checkout -- <file>".

Unstage Changes:
Remove files from the staging area using "git reset <file>".

Reset to Previous Commit:
Reset to a previous commit and discard changes using "git reset --hard <commit_hash>".

Revert a Commit:
Create a new commit that undoes changes from a previous commit using "git revert <commit_hash>".

Undo the Last Commit (Keep Changes):
Undo the last commit while keeping changes using "git reset --soft HEAD~1".

Amend the Last Commit:
Modify the last commit using "git commit --amend".`,
    code: `# Discard unstaged changes
git checkout -- <file>

# Unstage changes
git reset <file>

# Reset to previous commit
git reset --hard <commit_hash>

# Revert a commit
git revert <commit_hash>

# Undo last commit (keep changes)
git reset --soft HEAD~1

# Amend last commit
git commit --amend`
  },

  "Git stash": {
    title: "Git stash",
    content: `Git stash temporarily saves uncommitted changes and reverts your working directory to the last commit. This is useful when you need to switch branches without committing.

Stash Changes:
Save uncommitted changes using "git stash".

List Stashes:
View all stashed changes using "git stash list".

Apply Most Recent Stash:
Reapply the most recent stash without removing it using "git stash apply".

Apply a Specific Stash:
Apply a specific stash using "git stash apply stash@{<number>}".

Pop a Stash:
Apply and remove a stash using "git stash pop".

Drop a Stash:
Delete a specific stash using "git stash drop stash@{<number>}".

Clear All Stashes:
Delete all stashes using "git stash clear".`,
    code: `# Stash changes
git stash

# List stashes
git stash list

# Apply most recent stash
git stash apply

# Apply specific stash
git stash apply stash@{0}

# Pop a stash
git stash pop

# Drop a stash
git stash drop stash@{0}

# Clear all stashes
git stash clear`
  },

  "Git hooks": {
    title: "Git hooks",
    content: `Git hooks are scripts that run automatically at certain points in the Git workflow. They allow you to enforce rules or automate tasks.

Common Hooks:
- pre-commit: Runs before creating a commit. Useful for running tests or linting.
- commit-msg: Runs after entering the commit message but before finalizing the commit.
- pre-push: Runs before pushing to a remote repository. Useful for running tests or build tasks.

Create a Hook:
Add a script in the .git/hooks directory with the appropriate name and make it executable using "chmod +x".

Example Pre-commit Hook:
A script that checks for syntax errors in Python files before allowing a commit.

Enable/Disable Hooks:
Temporarily disable hooks using "git commit --no-verify" to bypass pre-commit hooks.`,
    code: `# Create pre-commit hook
touch .git/hooks/pre-commit
chmod +x .git/hooks/pre-commit

# Example pre-commit hook (Python syntax check)
#!/bin/sh
python -m py_compile $(git diff --cached --name-only --diff-filter=ACM | grep '.py$')

# Bypass hooks
git commit --no-verify

# List hooks
ls -la .git/hooks/`
  },

  "Gitignore": {
    title: "Gitignore",
    content: `A .gitignore file specifies which files and directories Git should ignore. This is useful for excluding build artifacts, logs, and environment variables from version control.

Create .gitignore:
Create a file named .gitignore in the root of your repository and add patterns to ignore.

Common Patterns:
- node_modules/ - Ignore a directory
- *.log - Ignore files with a specific extension
- .env - Ignore specific files
- /dist - Ignore a specific directory
- **/*.tmp - Ignore files recursively

Stop Tracking a File:
Remove a previously committed file from tracking using "git rm --cached <file>".

Ignore Already Committed Files:
Commit the removal using "git commit -m 'Stop tracking <file>'".

Global Gitignore:
Create a global .gitignore using "git config --global core.excludesfile ~/.gitignore_global".`,
    code: `# Create .gitignore
touch .gitignore

# Common .gitignore content
node_modules/
dist/
.DS_Store
*.log
.env
.idea/
*.swp
build/

# Stop tracking a file
git rm --cached <file>
git commit -m "Stop tracking <file>"

# View gitignore rules
git check-ignore -v <file>`
  },

  "GitLab/GitHub basics": {
    title: "GitLab/GitHub basics",
    content: `GitHub and GitLab are platforms for hosting Git repositories and collaborating on projects.

Create a Repository:
Click "New Repository" and fill in the repository name, description, and settings.

Clone a Repository:
Clone the repository to your local machine using "git clone <repository_url>".

Add, Commit, and Push:
Make changes, stage them with "git add .", commit with "git commit -m 'message'", and push with "git push".

Create a Branch:
Create a new branch for features using "git checkout -b feature/name".

Create a Pull Request:
Push your branch and create a pull request through the web interface to propose changes.

Review and Merge:
Team members review the pull request, discuss changes, and merge when approved.

Issues and Discussions:
Use Issues to track bugs and feature requests. Use Discussions for project questions and ideas.`,
    code: `# Clone repository
git clone <repository_url>

# Create and push feature branch
git checkout -b feature/name
git add .
git commit -m "Add feature"
git push origin feature/name

# Update from main
git fetch origin
git merge origin/main

# Delete branch after merge
git branch -d feature/name
git push origin --delete feature/name`
  },

  "Advanced Git commands": {
    title: "Advanced Git commands",
    content: `Advanced Git commands help with complex scenarios and repository management.

Interactive Rebase:
Edit, squash, or reorder commits using "git rebase -i <commit_hash>".

Cherry-pick:
Apply a specific commit from another branch using "git cherry-pick <commit_hash>".

Bisect:
Find the commit that introduced a bug by testing commits systematically using "git bisect start", "git bisect bad", and "git bisect good <commit_hash>".

Reset:
Reset your branch to a specific commit using "git reset --hard <commit_hash>".

Filter-branch:
Rewrite history or remove sensitive data using "git filter-branch --tree-filter 'rm -f <file>' HEAD".

Reflog:
View the reference log of your HEAD changes using "git reflog" to recover lost commits.

Blame:
Identify who made changes to specific lines using "git blame <file>".`,
    code: `# Interactive rebase
git rebase -i <commit_hash>

# Cherry-pick a commit
git cherry-pick <commit_hash>

# Bisect to find a bug
git bisect start
git bisect bad
git bisect good <commit_hash>

# Reset to commit
git reset --hard <commit_hash>

# Remove file from history
git filter-branch --tree-filter 'rm -f <file>' HEAD

# View reference log
git reflog

# Blame a file
git blame <file>`
  },
};

// Convert Git content to LearnLanguage format
export const getGitLanguageContent = (): LearnLanguage => {
  return {
    id: "git",
    name: "Git",
    icon: "GitBranch",
    topics: topicsOfGit.map((topic) => ({
      id: `git-${topic.toLowerCase().replace(/\s+/g, "-")}`,
      title: topic,
      content: topicContentsOfGit[topic]?.content || "",
      code: topicContentsOfGit[topic]?.code,
    })),
  };
};
