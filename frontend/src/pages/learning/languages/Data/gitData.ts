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
    [key: string]: { title: string; content: string;  code?: string };
  } = {
"Introduction": {
title: "Introduction",
content: `Git is a distributed version control system designed to handle everything from small to very large projects with speed and efficiency. It allows multiple people to work on a project simultaneously, tracks changes to files, and enables collaborative work by merging changes from different contributors.

**Key Concepts:**
1. **Version Control:** Git helps track changes to files over time, allowing you to revert to previous versions, compare changes, and understand the history of a project.
2. **Distributed System:** Unlike centralized version control systems, Git allows each contributor to have a full copy of the repository, including its history. This setup enhances redundancy and reliability.
3. **Repository:** A Git repository is a directory that contains all of your project files and their history. Repositories can be local (on your machine) or remote (on a server).
4. **Commit:** A commit is a snapshot of your project at a particular point in time. Each commit is identified by a unique hash and includes a message describing the changes.
5. **Branching:** Branching allows you to create separate lines of development within a repository. You can work on new features or bug fixes in a branch without affecting the main project.
6. **Merging:** When a branch is ready, you can merge its changes back into the main branch (usually called "main" or "master"), combining the work from different branches.

**Benefits of Using Git:**
- **Collaboration:** Multiple developers can work on the same project simultaneously, with Git managing and integrating their changes.
- **History Tracking:** Git keeps a detailed history of changes, making it easy to track progress and understand the evolution of a project.
- **Branching and Merging:** Git’s branching model allows for isolated development, feature experimentation, and easy integration of changes.

**Common Terms:**
- **Repository (Repo):** A project directory containing all files and their version history.
- **Commit:** A record of changes made to the files in the repository.
- **Branch:** A separate line of development in a repository.
- **Merge:** The process of combining changes from different branches.

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
    content: `
    ## Installing Git

    ### Windows
    1. Download the Git installer from the official Git website: [Git for Windows](https://git-scm.com/download/win).
    2. Run the installer and follow the on-screen instructions.
    3. During the installation process, you can choose the default options. If you're unsure, it's safe to stick with the defaults.
    4. After the installation is complete, open a command prompt or Git Bash and run \`git --version\` to verify the installation.

    ### Linux
    **Debian/Ubuntu-based distributions:**
    1. Open a terminal window.
    2. Update your package list:
       \`\`\`
       sudo apt update
       \`\`\`
    3. Install Git:
       \`\`\`
       sudo apt install git
       \`\`\`
    4. Verify the installation by running:
       \`\`\`
       git --version
       \`\`\`

    **Fedora-based distributions:**
    1. Open a terminal window.
    2. Install Git:
       \`\`\`
       sudo dnf install git
       \`\`\`
    3. Verify the installation by running:
       \`\`\`
       git --version
       \`\`\`

    **Arch-based distributions:**
    1. Open a terminal window.
    2. Install Git:
       \`\`\`
       sudo pacman -S git
       \`\`\`
    3. Verify the installation by running:
       \`\`\`
       git --version
       \`\`\`

    ### Mac
    1. Open the Terminal application.
    2. Install Git using Homebrew (if Homebrew is not installed, install it from [Homebrew](https://brew.sh/)):
       \`\`\`
       brew install git
       \`\`\`
    3. Verify the installation by running:
       \`\`\`
       git --version
       \`\`\`
    `,
    code: `
    # Verify Git Installation
    git --version
    `
  },
  "Basic Git commands": {
    title: "Basic Git commands",
    content: `
    ## Basic Git Commands

    ### Initializing a Repository
    To create a new Git repository, navigate to your project directory and run:
    \`\`\`
    git init
    \`\`\`

    ### Cloning a Repository
    To clone an existing repository, use the following command:
    \`\`\`
    git clone <repository_url>
    \`\`\`

    ### Checking Repository Status
    To check the status of your working directory and staging area, run:
    \`\`\`
    git status
    \`\`\`

    ### Adding Changes
    To add changes to the staging area, use:
    \`\`\`
    git add <file_name>
    \`\`\`
    To add all changes, use:
    \`\`\`
    git add .
    \`\`\`

    ### Committing Changes
    To commit the staged changes, use:
    \`\`\`
    git commit -m "Your commit message"
    \`\`\`

    ### Viewing Commit History
    To view the commit history, use:
    \`\`\`
    git log
    \`\`\`

    ### Creating a Branch
    To create a new branch, use:
    \`\`\`
    git branch <branch_name>
    \`\`\`

    ### Switching Branches
    To switch to a different branch, use:
    \`\`\`
    git checkout <branch_name>
    \`\`\`
    Or, for newer versions of Git:
    \`\`\`
    git switch <branch_name>
    \`\`\`

    ### Merging Branches
    To merge a branch into your current branch, use:
    \`\`\`
    git merge <branch_name>
    \`\`\`

    ### Deleting a Branch
    To delete a branch, use:
    \`\`\`
    git branch -d <branch_name>
    \`\`\`

    ### Fetching Changes from Remote
    To fetch changes from the remote repository without merging, use:
    \`\`\`
    git fetch
    \`\`\`

    ### Pulling Changes from Remote
    To fetch and merge changes from the remote repository, use:
    \`\`\`
    git pull
    \`\`\`

    ### Pushing Changes to Remote
    To push your local changes to the remote repository, use:
    \`\`\`
    git push
    \`\`\`
    `,
    code: `
    # Initialize a new Git repository
    git init

    # Clone an existing repository
    git clone <repository_url>

    # Check the status of the repository
    git status

    # Add changes to the staging area
    git add <file_name>
    git add .

    # Commit staged changes
    git commit -m "Your commit message"

    # View commit history
    git log

    # Create a new branch
    git branch <branch_name>

    # Switch to a different branch
    git checkout <branch_name>
    git switch <branch_name>

    # Merge a branch into the current branch
    git merge <branch_name>

    # Delete a branch
    git branch -d <branch_name>

    # Fetch changes from the remote repository
    git fetch

    # Fetch and merge changes from the remote repository
    git pull

    # Push local changes to the remote repository
    git push
    `
  },
  "Git configuration": {
    title: "Git configuration",
    content: `
    ## Git Configuration

    Git configuration is essential for setting up your identity, preferences, and behavior of Git on your system. Configurations can be applied at three levels: system, global, and local.

    ### Config Levels
    - **System**: Applies to all users on the system and all their repositories.
    - **Global**: Applies to the currently logged-in user and all their repositories.
    - **Local**: Applies to a specific repository.

    ### Setting Up Your Identity
    To set your name and email, which will be used for all your commits, use:
    \`\`\`
    git config --global user.name "Your Name"
    git config --global user.email "your.email@example.com"
    \`\`\`

    ### Viewing Configuration
    To view the current Git configuration, use:
    \`\`\`
    git config --list
    \`\`\`
    This command lists all the configuration settings that are currently in effect.

    ### Editing Configuration
    You can edit the configuration file directly by opening it in a text editor:
    - Global configuration file: \`~/.gitconfig\`
    - Local configuration file: \`.git/config\` in your repository directory

    ### Setting Up an Editor
    To set the default text editor for Git, use:
    \`\`\`
    git config --global core.editor "editor_name"
    \`\`\`
    For example, to set Vim as your default editor:
    \`\`\`
    git config --global core.editor "vim"
    \`\`\`

    ### Setting Up a Merge Tool
    To set the default merge tool for Git, use:
    \`\`\`
    git config --global merge.tool "tool_name"
    \`\`\`
    For example, to set Vimdiff as your merge tool:
    \`\`\`
    git config --global merge.tool "vimdiff"
    \`\`\`

    ### Aliases
    You can create shortcuts for commonly used Git commands by setting up aliases:
    \`\`\`
    git config --global alias.co checkout
    git config --global alias.br branch
    git config --global alias.ci commit
    git config --global alias.st status
    \`\`\`

    ### Configuring Line Endings
    To handle line endings properly across different operating systems, configure the following:
    - For Windows:
      \`\`\`
      git config --global core.autocrlf true
      \`\`\`
    - For macOS and Linux:
      \`\`\`
      git config --global core.autocrlf input
      \`\`\`
    `,
    code: `
    # Set your name and email
    git config --global user.name "Your Name"
    git config --global user.email "your.email@example.com"

    # View the current Git configuration
    git config --list

    # Set the default text editor for Git
    git config --global core.editor "vim"

    # Set the default merge tool for Git
    git config --global merge.tool "vimdiff"

    # Create Git aliases
    git config --global alias.co checkout
    git config --global alias.br branch
    git config --global alias.ci commit
    git config --global alias.st status

    # Configure line endings for Windows
    git config --global core.autocrlf true

    # Configure line endings for macOS and Linux
    git config --global core.autocrlf input
    `
  },
 "Git repositories": {
    title: "Git repositories",
    content: `
    ## Git Repositories

    A Git repository is a storage space where your project files and their history are stored. Repositories can be local (on your machine) or remote (hosted on a server). Repositories track changes to your project over time, allowing you to collaborate with others and revert to previous versions when needed.

    ### Creating a Local Repository
    To create a new Git repository, navigate to your project directory and run:
    \`\`\`
    git init
    \`\`\`
    This command creates a hidden \`.git\` directory that contains all the necessary files for version control.

    ### Cloning a Remote Repository
    To clone an existing remote repository, use the following command:
    \`\`\`
    git clone <repository_url>
    \`\`\`
    This command creates a local copy of the remote repository on your machine.

    ### Viewing the Current Repository
    To check the current repository you are working in, you can use:
    \`\`\`
    git status
    \`\`\`
    This command shows the status of the repository, including any changes that have been staged, committed, or are untracked.

    ### Adding a Remote Repository
    To add a remote repository to your local repository, use:
    \`\`\`
    git remote add <remote_name> <repository_url>
    \`\`\`
    For example:
    \`\`\`
    git remote add origin https://github.com/user/repo.git
    \`\`\`

    ### Viewing Remote Repositories
    To view all remote repositories linked to your local repository, use:
    \`\`\`
    git remote -v
    \`\`\`

    ### Removing a Remote Repository
    To remove a remote repository, use:
    \`\`\`
    git remote remove <remote_name>
    \`\`\`
    `,
    code: `
    # Initialize a new Git repository
    git init

    # Clone an existing remote repository
    git clone <repository_url>

    # Check the status of the repository
    git status

    # Add a remote repository
    git remote add origin https://github.com/user/repo.git

    # View remote repositories
    git remote -v

    # Remove a remote repository
    git remote remove <remote_name>
    `
  },
 "Staging changes": {
    title: "Staging changes",
    content: `
    ## Staging Changes

    Staging changes is the process of adding modifications to the staging area before committing them to the repository. This allows you to group related changes into a single commit, making it easier to manage and understand the project's history.

    ### Adding a Single File
    To stage a specific file, use:
    \`\`\`
    git add <file_name>
    \`\`\`

    ### Adding All Changes
    To stage all changes in the current directory and subdirectories, use:
    \`\`\`
    git add .
    \`\`\`

    ### Adding Changes Interactively
    To stage changes interactively, use:
    \`\`\`
    git add -i
    \`\`\`
    This command allows you to review and selectively stage changes.

    ### Staging Part of a File
    To stage specific parts of a file, use:
    \`\`\`
    git add -p <file_name>
    \`\`\`
    This command breaks down changes into hunks and lets you choose which hunks to stage.
    `,
    code: `
    # Stage a specific file
    git add <file_name>

    # Stage all changes
    git add .

    # Stage changes interactively
    git add -i

    # Stage specific parts of a file
    git add -p <file_name>
    `
  },
  "Committing changes": {
    title: "Committing changes",
    content: `
    ## Committing Changes

    Committing changes is the process of saving your staged modifications to the repository. Each commit includes a unique identifier, a timestamp, and a commit message describing the changes.

    ### Creating a Commit
    To commit staged changes with a message, use:
    \`\`\`
    git commit -m "Your commit message"
    \`\`\`

    ### Writing a Detailed Commit Message
    To write a more detailed commit message, omit the \`-m\` option:
    \`\`\`
    git commit
    \`\`\`
    This command opens the default text editor where you can write a detailed commit message.

    ### Amending the Last Commit
    To amend the last commit, use:
    \`\`\`
    git commit --amend
    \`\`\`
    This command allows you to modify the commit message or include additional changes.

    ### Skipping the Staging Area
    To commit changes directly without staging, use:
    \`\`\`
    git commit -a -m "Your commit message"
    \`\`\`
    `,
    code: `
    # Commit staged changes with a message
    git commit -m "Your commit message"

    # Write a detailed commit message
    git commit

    # Amend the last commit
    git commit --amend

    # Commit changes directly without staging
    git commit -a -m "Your commit message"
    `
  },
  "Viewing commit history": {
    title: "Viewing commit history",
    content: `
    ## Viewing Commit History

    Git keeps a detailed history of all commits made to a repository. Viewing this history allows you to understand the changes made over time and who made them.

    ### Basic Log
    To view the commit history, use:
    \`\`\`
    git log
    \`\`\`
    This command shows a list of commits in reverse chronological order.

    ### One-line Summary
    To view the commit history with one-line summaries, use:
    \`\`\`
    git log --oneline
    \`\`\`

    ### Detailed Log
    To view a more detailed log with file changes, use:
    \`\`\`
    git log -p
    \`\`\`

    ### Specific Number of Commits
    To view a specific number of recent commits, use:
    \`\`\`
    git log -n <number>
    \`\`\`

    ### Filtering by Author
    To view commits by a specific author, use:
    \`\`\`
    git log --author="Author Name"
    \`\`\`

    ### Filtering by File
    To view commits that affected a specific file, use:
    \`\`\`
    git log -- <file_name>
    \`\`\`
    `,
    code: `
    # View the commit history
    git log

    # View the commit history with one-line summaries
    git log --oneline

    # View a detailed log with file changes
    git log -p

    # View a specific number of recent commits
    git log -n <number>

    # View commits by a specific author
    git log --author="Author Name"

    # View commits that affected a specific file
    git log -- <file_name>
    `
  },
  "Branching": {
    title: "Branching",
    content: `
    ## Branching

    Branching allows you to create separate lines of development within a Git repository. This is useful for working on new features or bug fixes without affecting the main codebase.

    ### Creating a New Branch
    To create a new branch, use:
    \`\`\`
    git branch <branch_name>
    \`\`\`

    ### Switching Branches
    To switch to an existing branch, use:
    \`\`\`
    git checkout <branch_name>
    \`\`\`
    Or, for newer versions of Git:
    \`\`\`
    git switch <branch_name>
    \`\`\`

    ### Creating and Switching to a New Branch
    To create a new branch and switch to it immediately, use:
    \`\`\`
    git checkout -b <branch_name>
    \`\`\`
    Or, for newer versions of Git:
    \`\`\`
    git switch -c <branch_name>
    \`\`\`

    ### Listing Branches
    To list all branches in the repository, use:
    \`\`\`
    git branch
    \`\`\`

    ### Deleting a Branch
    To delete a branch, use:
    \`\`\`
    git branch -d <branch_name>
    \`\`\`
    To force delete a branch that hasn't been merged, use:
    \`\`\`
    git branch -D <branch_name>
    \`\`\`
    `,
    code: `
    # Create a new branch
    git branch <branch_name>

    # Switch to an existing branch
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
    `
  },











"Merging branches": {
    title: "Merging branches",
    content: `
    ## Merging Branches

    Merging is the process of combining the changes from different branches into one branch. It allows you to integrate new features, bug fixes, or other updates.

    ### Basic Merge
    To merge a branch into the current branch, use:
    \`\`\`
    git merge <branch_name>
    \`\`\`
    This command merges the specified branch into the current branch.

    ### Fast-Forward Merge
    If the current branch has not diverged from the branch being merged, Git performs a fast-forward merge, simply moving the branch pointer forward.

    ### Three-Way Merge
    If the branches have diverged, Git performs a three-way merge, creating a new commit that combines the changes from both branches.

    ### Merge Commit Message
    You can add a commit message during the merge using:
    \`\`\`
    git merge <branch_name> -m "Merge commit message"
    \`\`\`

    ### Viewing Merge History
    To view the history of merges, use:
    \`\`\`
    git log --merges
    \`\`\`
    `,
    code: `
    # Merge a branch into the current branch
    git merge <branch_name>

    # Add a commit message during the merge
    git merge <branch_name> -m "Merge commit message"

    # View the history of merges
    git log --merges
    `
  },
  "Resolving merge conflicts": {
    title: "Resolving merge conflicts",
    content: `
    ## Resolving Merge Conflicts

    Merge conflicts occur when Git cannot automatically resolve differences between branches. Manual intervention is required to resolve these conflicts.

    ### Identifying Conflicts
    When a merge conflict occurs, Git marks the conflicting files and stops the merge process. You can identify conflicts by checking the status:
    \`\`\`
    git status
    \`\`\`

    ### Resolving Conflicts
    To resolve conflicts, open the conflicting files and look for conflict markers (<<<<<<, ======, >>>>>>). Edit the files to remove the markers and keep the desired changes.

    ### Marking Conflicts as Resolved
    Once you have resolved the conflicts, mark the files as resolved:
    \`\`\`
    git add <conflicted_file>
    \`\`\`

    ### Completing the Merge
    After resolving and marking all conflicts, complete the merge with:
    \`\`\`
    git commit
    \`\`\`

    ### Aborting a Merge
    If you want to abort the merge and return to the pre-merge state, use:
    \`\`\`
    git merge --abort
    \`\`\`
    `,
    code: `
    # Identify conflicts
    git status

    # Mark conflicts as resolved
    git add <conflicted_file>

    # Complete the merge
    git commit

    # Abort the merge
    git merge --abort
    `
  },
  "Git workflows": {
    title: "Git workflows",
    content: `
    ## Git Workflows

    Git workflows define a standard way of using Git in a project. They help in managing branches, collaborating with team members, and ensuring a smooth development process.

    ### Centralized Workflow
    A simple workflow where all changes are pushed to a central repository. It is suitable for small teams or solo projects.

    ### Feature Branch Workflow
    In this workflow, each new feature is developed in its own branch. Once the feature is complete, it is merged into the main branch. This helps in keeping the main branch stable.

    ### Gitflow Workflow
    A more complex workflow that uses two main branches (main and develop) and several supporting branches (feature, release, hotfix). It provides a robust framework for managing releases and hotfixes.

    ### Forking Workflow
    Commonly used in open-source projects, this workflow involves forking the repository, making changes in the forked repository, and then creating pull requests to merge changes back into the original repository.

    ### Choosing a Workflow
    The choice of workflow depends on the project's needs, team size, and development practices. It's important to choose a workflow that aligns with your team's processes and goals.
    `,
  code: `
    # Example commands for the Feature Branch Workflow

    # Create a new feature branch
    git checkout -b feature/<feature_name>

    # Commit changes to the feature branch
    git commit -m "Implement <feature_name>"

    # Switch to the main branch
    git checkout main

    # Merge the feature branch into the main branch
    git merge feature/<feature_name>

    # Delete the feature branch
    git branch -d feature/<feature_name>
    `
  },
  "Remote repositories": {
    title: "Remote repositories",
    content: `
    ## Remote Repositories

    Remote repositories are versions of your project that are hosted on the internet or network. They allow multiple people to collaborate on the same project.

    ### Adding a Remote Repository
    To add a remote repository, use:
    \`\`\`
    git remote add <remote_name> <repository_url>
    \`\`\`

    ### Listing Remote Repositories
    To list the remote repositories, use:
    \`\`\`
    git remote -v
    \`\`\`

    ### Removing a Remote Repository
    To remove a remote repository, use:
    \`\`\`
    git remote remove <remote_name>
    \`\`\`

    ### Renaming a Remote Repository
    To rename a remote repository, use:
    \`\`\`
    git remote rename <old_name> <new_name>
    \`\`\`

    ### Fetching Changes from a Remote Repository
    To fetch changes from a remote repository without merging them, use:
    \`\`\`
    git fetch <remote_name>
    \`\`\`

    ### Pulling Changes from a Remote Repository
    To fetch and merge changes from a remote repository, use:
    \`\`\`
    git pull <remote_name> <branch_name>
    \`\`\`

    ### Pushing Changes to a Remote Repository
    To push changes to a remote repository, use:
    \`\`\`
    git push <remote_name> <branch_name>
    \`\`\`
    `,
    code: `
    # Add a remote repository
    git remote add <remote_name> <repository_url>

    # List remote repositories
    git remote -v

    # Remove a remote repository
    git remote remove <remote_name>

    # Rename a remote repository
    git remote rename <old_name> <new_name>

    # Fetch changes from a remote repository
    git fetch <remote_name>

    # Pull changes from a remote repository
    git pull <remote_name> <branch_name>

    # Push changes to a remote repository
    git push <remote_name> <branch_name>
    `
  },
  "Cloning repositories": {
    title: "Cloning repositories",
    content: `
    ## Cloning Repositories

    Cloning a repository means creating a local copy of a remote repository on your machine. This allows you to work on the project locally.

    ### Cloning a Repository
    To clone a repository, use:
    \`\`\`
    git clone <repository_url>
    \`\`\`

    ### Cloning to a Specific Directory
    To clone a repository into a specific directory, use:
    \`\`\`
    git clone <repository_url> <directory_name>
    \`\`\`

    ### Cloning with a Specific Branch
    To clone a repository and checkout a specific branch, use:
    \`\`\`
    git clone -b <branch_name> <repository_url>
    \`\`\`
    `,
    code: `
    # Clone a repository
    git clone <repository_url>

    # Clone a repository into a specific directory
    git clone <repository_url> <directory_name>

    # Clone a repository and checkout a specific branch
    git clone -b <branch_name> <repository_url>
    `
  },




















"Pushing changes": {
    title: "Pushing changes",
    content: `
    ## Pushing Changes

    Pushing changes involves uploading your local commits to a remote repository. This ensures that your work is shared with others and stored on the remote server.

    ### Basic Push
    To push your changes to a specific branch on a remote repository, use:
    \`\`\`
    git push <remote_name> <branch_name>
    \`\`\`
    Replace <remote_name> with the name of your remote repository (e.g., origin) and <branch_name> with the name of your branch (e.g., main).

    ### Pushing All Branches
    To push all branches to the remote repository, use:
    \`\`\`
    git push --all <remote_name>
    \`\`\`

    ### Force Pushing
    To force push changes (which overwrites the remote branch), use:
    \`\`\`
    git push --force <remote_name> <branch_name>
    \`\`\`

    ### Pushing Tags
    To push tags to the remote repository, use:
    \`\`\`
    git push <remote_name> --tags
    \`\`\`
    `,
    code: `
    # Push changes to a specific branch
    git push <remote_name> <branch_name>

    # Push all branches to the remote repository
    git push --all <remote_name>

    # Force push changes to the remote repository
    git push --force <remote_name> <branch_name>

    # Push all tags to the remote repository
    git push <remote_name> --tags
    `
  },
  "Pulling changes": {
    title: "Pulling changes",
    content: `
    ## Pulling Changes

    Pulling changes involves fetching updates from a remote repository and merging them into your local branch. This is essential for synchronizing your local work with the remote repository.

    ### Basic Pull
    To pull changes from a specific branch of a remote repository, use:
    \`\`\`
    git pull <remote_name> <branch_name>
    \`\`\`
    Replace <remote_name> with the name of your remote repository (e.g., origin) and <branch_name> with the name of your branch (e.g., main).

    ### Pull with Rebase
    To pull changes and rebase your local commits on top of the fetched changes, use:
    \`\`\`
    git pull --rebase <remote_name> <branch_name>
    \`\`\`

    ### Pulling All Branches
    To pull all branches from the remote repository, you need to first fetch all branches:
    \`\`\`
    git fetch --all
    \`\`\`
    Then, merge each branch individually as needed.
    `,
    code: `
    # Pull changes from a specific branch
    git pull <remote_name> <branch_name>

    # Pull changes and rebase local commits
    git pull --rebase <remote_name> <branch_name>

    # Fetch all branches from the remote repository
    git fetch --all
    `
  },
  "Forking repositories": {
    title: "Forking repositories",
    content: `
    ## Forking Repositories

    Forking a repository creates a personal copy of someone else's repository. This allows you to experiment and make changes without affecting the original repository.

    ### Forking on GitHub/GitLab
    1. Navigate to the repository you want to fork on GitHub or GitLab.
    2. Click the "Fork" button (GitHub) or "Fork" dropdown (GitLab) at the top right of the page.
    3. Choose your own account or organization to fork the repository into.

    ### Cloning the Forked Repository
    After forking a repository, you can clone it to your local machine using:
    \`\`\`
    git clone <forked_repository_url>
    \`\`\`

    ### Adding Remote to Original Repository
    To keep track of updates from the original repository, add it as a remote:
    \`\`\`
    git remote add upstream <original_repository_url>
    \`\`\`

    ### Fetching Updates from the Original Repository
    To fetch updates from the original repository (upstream), use:
    \`\`\`
    git fetch upstream
    \`\`\`

    ### Merging Updates from the Original Repository
    To merge changes from the original repository into your fork, use:
    \`\`\`
    git merge upstream/<branch_name>
    \`\`\`
    `,
    code: `
    # Clone the forked repository
    git clone <forked_repository_url>

    # Add a remote to the original repository
    git remote add upstream <original_repository_url>

    # Fetch updates from the original repository
    git fetch upstream

    # Merge updates from the original repository
    git merge upstream/<branch_name>
    `
  },































  "Creating pull requests": {
    title: "Creating pull requests",
    content: `
    ## Creating Pull Requests

    Pull requests (PRs) are a way to propose changes to a repository and request that those changes be reviewed and merged. They are commonly used in collaborative workflows.

    ### GitHub
    1. Push your branch to the remote repository:
       \`\`\`
       git push origin <branch_name>
       \`\`\`
    2. Go to the repository on GitHub.
    3. Click on "Compare & pull request" for your branch.
    4. Add a title and description for your pull request.
    5. Choose reviewers if needed and click "Create pull request."

    ### GitLab
    1. Push your branch to the remote repository:
       \`\`\`
       git push origin <branch_name>
       \`\`\`
    2. Go to the repository on GitLab.
    3. Navigate to "Merge Requests."
    4. Click on "New merge request."
    5. Select your source and target branches.
    6. Add a title and description for your merge request.
    7. Click "Submit merge request."
    `,
    code: `
    # Push your branch to the remote repository
    git push origin <branch_name>
    `
  },
  "Git tags": {
    title: "Git tags",
    content: `
    ## Git Tags

    Tags are used to mark specific points in the repository's history, often used for releases.

    ### Creating a Tag
    To create a tag, use:
    \`\`\`
    git tag <tag_name>
    \`\`\`
    Replace <tag_name> with your desired tag name (e.g., v1.0.0).

    ### Creating a Tag with a Message
    To create a tag with a message, use:
    \`\`\`
    git tag -a <tag_name> -m "Tag message"
    \`\`\`

    ### Pushing Tags
    To push tags to the remote repository, use:
    \`\`\`
    git push origin <tag_name>
    \`\`\`
    To push all tags, use:
    \`\`\`
    git push origin --tags
    \`\`\`

    ### Deleting a Tag
    To delete a local tag, use:
    \`\`\`
    git tag -d <tag_name>
    \`\`\`
    To delete a remote tag, use:
    \`\`\`
    git push origin --delete <tag_name>
    \`\`\`
    `,
    code: `
    # Create a tag
    git tag <tag_name>

    # Create a tag with a message
    git tag -a <tag_name> -m "Tag message"

    # Push a specific tag
    git push origin <tag_name>

    # Push all tags
    git push origin --tags

    # Delete a local tag
    git tag -d <tag_name>

    # Delete a remote tag
    git push origin --delete <tag_name>
    `
  },
  "Rebasing": {
    title: "Rebasing",
    content: `
    ## Rebasing

    Rebasing is the process of moving or combining a sequence of commits to a new base commit. It is often used to maintain a cleaner project history.

    ### Basic Rebase
    To rebase your current branch onto another branch, use:
    \`\`\`
    git rebase <branch_name>
    \`\`\`
    Replace <branch_name> with the branch you want to rebase onto.

    ### Interactive Rebase
    To perform an interactive rebase, use:
    \`\`\`
    git rebase -i <commit_hash>
    \`\`\`
    Replace <commit_hash> with the commit hash you want to rebase onto. This allows you to edit, reorder, or squash commits.

    ### Resolving Conflicts During Rebase
    If conflicts occur during a rebase, resolve them manually, then use:
    \`\`\`
    git add <file>
    git rebase --continue
    \`\`\`
    To abort the rebase, use:
    \`\`\`
    git rebase --abort
    \`\`\`
    `,
    code: `
    # Basic rebase
    git rebase <branch_name>

    # Interactive rebase
    git rebase -i <commit_hash>

    # Resolve conflicts and continue
    git add <file>
    git rebase --continue

    # Abort the rebase
    git rebase --abort
    `
  },






































  "Undoing changes": {
    title: "Undoing changes",
    content: `
    ## Undoing Changes

    Sometimes you need to undo changes that you have made. Git provides several ways to do this depending on the situation.

    ### Discarding Unstaged Changes
    To discard changes in your working directory that have not been staged yet, use:
    \`\`\`
    git checkout -- <file>
    \`\`\`
    Replace <file> with the name of the file you want to revert.

    ### Unstaging Changes
    To unstage changes that you’ve added to the staging area, use:
    \`\`\`
    git reset <file>
    \`\`\`
    Replace <file> with the name of the file you want to unstage.

    ### Resetting to a Previous Commit
    To reset your repository to a previous commit (and discard all changes after that commit), use:
    \`\`\`
    git reset --hard <commit_hash>
    \`\`\`
    Replace <commit_hash> with the hash of the commit you want to reset to.

    ### Reverting a Commit
    To create a new commit that undoes changes from a previous commit, use:
    \`\`\`
    git revert <commit_hash>
    \`\`\`
    Replace <commit_hash> with the hash of the commit you want to revert.
    `,
    code: `
    # Discard unstaged changes
    git checkout -- <file>

    # Unstage changes
    git reset <file>

    # Reset to a previous commit (discard changes)
    git reset --hard <commit_hash>

    # Revert a commit
    git revert <commit_hash>
    `
  },
  "Git stash": {
    title: "Git stash",
    content: `
    ## Git Stash

    Git stash allows you to save your uncommitted changes temporarily and revert your working directory to the last commit.

    ### Stashing Changes
    To stash your changes, use:
    \`\`\`
    git stash
    \`\`\`

    ### Listing Stashes
    To list all stashes, use:
    \`\`\`
    git stash list
    \`\`\`

    ### Applying a Stash
    To apply the most recent stash without removing it, use:
    \`\`\`
    git stash apply
    \`\`\`
    To apply a specific stash, use:
    \`\`\`
    git stash apply stash@{<stash_number>}
    \`\`\`
    Replace <stash_number> with the number of the stash you want to apply.

    ### Dropping a Stash
    To delete a specific stash, use:
    \`\`\`
    git stash drop stash@{<stash_number>}
    \`\`\`

    ### Clearing All Stashes
    To clear all stashes, use:
    \`\`\`
    git stash clear
    \`\`\`
    `,
  code: `
    # Stash changes
    git stash

    # List all stashes
    git stash list

    # Apply the most recent stash
    git stash apply

    # Apply a specific stash
    git stash apply stash@{<stash_number>}

    # Drop a specific stash
    git stash drop stash@{<stash_number>}

    # Clear all stashes
    git stash clear
    `
  },
  "Git hooks": {
    title: "Git hooks",
    content: `
    ## Git Hooks

    Git hooks are scripts that run automatically at certain points in the Git workflow. They allow you to enforce certain rules or automate tasks.

    ### Common Hooks
    - **pre-commit**: Runs before a commit is created. Useful for running tests or linting.
    - **commit-msg**: Runs after the commit message is entered but before the commit is finalized.
    - **pre-push**: Runs before pushing to a remote repository. Useful for running tests or build tasks.

    ### Setting Up a Hook
    Hooks are located in the .git/hooks directory of your repository. To create a new hook, add a script with the appropriate name (e.g., pre-commit) and make it executable:
    \`\`\`
    touch .git/hooks/pre-commit
    chmod +x .git/hooks/pre-commit
    \`\`\`

    ### Example of a Pre-commit Hook
    Here’s an example of a simple pre-commit hook that checks for syntax errors in Python files:
    \`\`\`
    #!/bin/sh
    for file in $(git diff --cached --name-only | grep '\.py$'); do
      python -m py_compile $file
      if [ $? -ne 0 ]; then
        echo "Syntax error in $file"
        exit 1
      fi
    done
    \`\`\`
    `,
    code: `
    # Create and make a hook executable
    touch .git/hooks/pre-commit
    chmod +x .git/hooks/pre-commit

    # Example of a pre-commit hook script
    #!/bin/sh
    for file in $(git diff --cached --name-only | grep '\.py$'); do
      python -m py_compile $file
      if [ $? -ne 0 ]; then
        echo "Syntax error in $file"
        exit 1
      fi
    done
    `
  },


  "Gitignore": {
    "title": "Gitignore",
    "content": `
    ## Gitignore

    The .gitignore file specifies which files and directories should be ignored by Git. This prevents unnecessary files from being tracked.

    ### Creating a .gitignore File
    Create a file named .gitignore in the root of your repository. Add patterns to specify which files and directories to ignore.

    ### Example .gitignore File
    Here is  an example of a .gitignore file:
    \`\`\`
    # Node.js dependencies
    node_modules/

    # Build output
    dist/

    # OS generated files
    .DS_Store

    # Logs
    *.log

    # Environment variables
    .env
    \`\`\`

    ### Ignoring Files After Initial Commit
    To stop tracking a file that was previously committed, use:
    \`\`\`
    git rm --cached <file>
    \`\`\`
    Then commit the changes:
    \`\`\`
    git commit -m "Stop tracking <file>"
    \`\`\`
    `,
    code: `
    # Create a .gitignore file
    touch .gitignore

    # Example .gitignore content
    # Node.js dependencies
    node_modules/

    # Build output
    dist/

    # OS generated files
    .DS_Store

    # Logs
    *.log

    # Environment variables
    .env

    # Stop tracking a file
    git rm --cached <file>
    git commit -m "Stop tracking <file>"
    `
  },
  







  "Collaboration with Git": {
    title: "Collaboration with Git",
    content: `
    ## Collaboration with Git

    Git facilitates collaboration by allowing multiple users to work on the same project simultaneously. Here's how you can collaborate effectively using Git:

    ### Forking Repositories
    Forking is creating a personal copy of someone else's repository. To fork a repository, go to the repository on GitHub and click the "Fork" button.

    ### Cloning Repositories
    Once you have forked a repository, you can clone it to your local machine using:
    \`\`\`
    git clone <repository_url>
    \`\`\`
    Replace  <repository_url> with the URL of the repository.

    ### Pull Requests
    After making changes to your forked repository, you can propose these changes to the original repository by creating a pull request. Go to the original repository, click "Pull Requests," and then "New Pull Request."

    ### Reviewing Pull Requests
    Repository maintainers can review pull requests, discuss changes, and request modifications before merging them into the main branch.

    ### Managing Conflicts
    Conflicts may arise when merging changes from different contributors. Use:
    \`\`\`
    git merge <branch>
    \`\`\`
    to merge branches and resolve conflicts manually if necessary.

    ### Synchronizing with the Original Repository
    To keep your forked repository up-to-date with the original repository, add the original repository as a remote and pull changes:
    \`\`\`
    git remote add upstream <original_repository_url>
    git fetch upstream
    git merge upstream/main
    \`\`\`
    `,
    code: `
    # Clone a repository
    git clone <repository_url>

    # Create a pull request
    # (Perform this on GitHub or similar platform)

    # Add the original repository as a remote
    git remote add upstream <original_repository_url>

    # Fetch and merge changes from the original repository
    git fetch upstream
    git merge upstream/main
    `
  },
  "Advanced Git commands": {
    title: "Advanced Git commands",
    content: `
    ## Advanced Git Commands

    Git provides a range of advanced commands for more complex scenarios. Here are some useful ones:

    ### Rebase Interactive
    Interactive rebase allows you to edit commits, squash them, or reorder them. Start an interactive rebase with:
    \`\`\`
    git rebase -i <commit_hash>
    \`\`\`
    Replace <commit_hash> with the hash of the commit before the ones you want to rebase.

    ### Cherry-pick
    To apply a specific commit from another branch onto your current branch, use:
    \`\`\`
    git cherry-pick <commit_hash>
    \`\`\`
    Replace <commit_hash> with the hash of the commit you want to apply.

    ### Bisect
    Git bisect helps you find the commit that introduced a bug. Start bisecting with:
    \`\`\`
    git bisect start
    git bisect bad
    git bisect good <commit_hash>
    \`\`\`
    Git will then guide you through the process of finding the bad commit.

    ### Reset
    To reset your branch to a specific state and optionally remove changes, use:
    \`\`\`
    git reset --hard <commit_hash>
    \`\`\`
    Replace <commit_hash> with the commit hash to reset to.

    ### Filter-Branch
    To rewrite history or remove sensitive data, use:
    \`\`\`
    git filter-branch --tree-filter 'rm -f <file>' HEAD
    \`\`\`
    Replace <file> with the file you want to remove.
    `,
    code: `
    # Interactive rebase
    git rebase -i <commit_hash>

    # Cherry-pick a commit
    git cherry-pick <commit_hash>

    # Bisect to find a bug
    git bisect start
    git bisect bad
    git bisect good <commit_hash>

    # Reset to a specific commit
    git reset --hard <commit_hash>

    # Remove a file from history
    git filter-branch --tree-filter 'rm -f <file>' HEAD
    `
  }
    
  }  