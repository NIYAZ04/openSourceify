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
    content: `Git is a distributed version control system used to manage code efficiently for projects of any size. It allows multiple developers to work on the same project at the same time while tracking every change made to files.

Git records changes over time so you can return to previous versions, compare modifications, and understand how a project has evolved. Unlike centralized systems, every developer has a full copy of the repository and its history, which improves reliability and enables offline work.

A Git repository stores project files along with their complete change history. Changes are saved as commits, where each commit represents a snapshot of the project at a specific moment. Git also supports branching, which allows working on features or fixes independently and merging them back when ready.

Because of these capabilities, Git is a core tool in modern software development and an essential skill for developers.`,
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
    content: `Git can be installed on all major operating systems. On Windows, it is installed using the official installer, which guides you through the setup process. After installation, Git can be verified from the command line.

On Linux systems, Git is installed using the system package manager. The exact command depends on the distribution, but verification is done the same way.

On macOS, Git is commonly installed using Homebrew. Once installed, checking the Git version confirms that the setup is complete.`,
    code: `# Verify Git Installation
git --version

# View Git configuration
git config --list`
  },

  "Basic Git commands": {
    title: "Basic Git commands",
    content: `Git provides a set of essential commands used in daily development. A repository can be created locally or cloned from a remote source.

Git tracks the current state of your project and allows you to stage changes before committing them. Commits store snapshots of your work along with messages explaining what changed.

Branches enable parallel development, making it easy to switch contexts, merge work, and delete unused branches. Git also supports fetching updates, pulling changes, and pushing commits to remote repositories.`,
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
    content: `Git configuration defines how Git behaves and how commits are identified. You can configure your name and email so every commit is properly attributed.

Configuration values can be applied globally, locally, or system-wide. Git allows viewing all current configuration settings at any time.

Common configuration options include setting a default editor, choosing a merge tool, creating command aliases, and handling line endings correctly across operating systems.`,
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
    content: `A Git repository stores project files along with their complete history. Repositories can exist locally on your machine or remotely on a server.

Initializing a repository creates internal Git metadata that tracks changes. Cloning a repository downloads the full project history so work can begin immediately.

Local repositories can be connected to remote repositories to enable collaboration and synchronization.`,
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
    content: `Staging is the step between editing files and committing them. It allows you to choose exactly which changes will be included in the next commit.

You can stage individual files, stage everything at once, or interactively select parts of files. Staged changes can be removed without losing file modifications.

Reviewing staged changes helps ensure clean and intentional commits.`,
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
    content: `Committing saves staged changes permanently in the repository history. Each commit represents the project state at a specific point in time.

Git supports simple commit messages as well as detailed messages written in an editor. The most recent commit can be amended to fix mistakes or add missing changes.

Clear commit messages improve project maintainability.`,
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
    content: `Git maintains a detailed record of all commits in a repository. Viewing commit history helps understand project evolution and contributor activity.

History can be displayed in compact or detailed formats and filtered by author, file, or number of commits.`,
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
    content: `Branching allows independent development within a repository. This makes it possible to work on new features or fixes without affecting the main branch.

Branches can be created, switched, renamed, and deleted easily. Completed work is merged back into another branch.`,
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
    content: `Merging combines changes from one branch into another. This is commonly done when a feature or fix is ready.

Git supports fast-forward merges and merge commits depending on branch history.`,
    code: `# Merge a branch
git merge <branch_name>

# Merge with custom message
git merge <branch_name> -m "Merge commit message"

# View merge history
git log --merges`
  },

  "Resolving merge conflicts": {
    title: "Resolving merge conflicts",
    content: `Merge conflicts occur when Git cannot automatically combine changes. This usually happens when the same part of a file is modified in multiple branches.

Conflicts must be resolved manually before the merge can be completed.`,
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
    content: `Git workflows define how teams structure branches and collaborate. Different workflows suit different team sizes and release strategies.

Choosing the right workflow improves stability, collaboration, and delivery speed.`,
    code: `# Feature Branch Workflow
git checkout -b feature/new-feature
git add .
git commit -m "Add new feature"
git push origin feature/new-feature

# Gitflow Workflow
git checkout -b feature/feature-name develop
git checkout develop
git merge feature/feature-name
git checkout -b release/1.0.0 develop
git checkout main
git merge release/1.0.0`
  },

  "Remote repositories": {
    title: "Remote repositories",
    content: `Remote repositories allow developers to share code and collaborate. They are usually hosted on platforms like GitHub or GitLab.

Git supports adding remotes, fetching updates, pulling changes, and pushing commits.`,
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
    content: `Cloning creates a local copy of a remote repository including its full history.

Git supports cloning specific branches, limiting history depth, and cloning into custom directories.`,
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
    content: `Pushing sends local commits to a remote repository so others can access them.

Branches and tags can be pushed, and upstream branches can be configured for convenience.`,
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
    content: `Pulling updates your local branch with remote changes. This usually combines fetching and merging.

Git also supports rebasing during pulls for a cleaner history.`,
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
    content: `Forking creates a personal copy of another repository, commonly used in open-source projects.

Forks can be synchronized with the original repository and contribute changes back through pull requests.`,
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
    content: `Pull requests allow contributors to propose changes and request review before merging.

Feedback can be addressed through additional commits that automatically update the request.`,
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
    content: `Tags mark important points in repository history, most commonly releases.

They provide stable references that can be pushed, deleted, or checked out.`,
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
    content: `Rebasing moves commits onto a new base commit to maintain a cleaner history.

Interactive rebasing allows editing, squashing, or reordering commits.`,
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
    content: `Git provides multiple ways to undo changes depending on the situation.

Some operations rewrite history, while others safely create new commits.`,
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
    content: `Git stash temporarily saves uncommitted changes and restores a clean working directory.

Stashed changes can be applied, dropped, or cleared as needed.`,
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
    content: `Git hooks are scripts that run automatically at specific points in the workflow.

They are commonly used to enforce rules or automate checks.`,
    code: `# Create pre-commit hook
touch .git/hooks/pre-commit
chmod +x .git/hooks/pre-commit

# Example pre-commit hook
#!/bin/sh
python -m py_compile $(git diff --cached --name-only --diff-filter=ACM | grep '.py$')

# Bypass hooks
git commit --no-verify

# List hooks
ls -la .git/hooks/`
  },

  "Gitignore": {
    title: "Gitignore",
    content: `A .gitignore file defines which files and directories Git should ignore.

It prevents unnecessary or sensitive files from being tracked.`,
    code: `# Create .gitignore
touch .gitignore

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
    content: `GitHub and GitLab host Git repositories and provide collaboration tools such as pull requests, issues, and discussions.

They support structured code review and team collaboration.`,
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
    content: `Advanced Git commands help with debugging, recovery, and history management.

They should be used carefully, especially on shared repositories.`,
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