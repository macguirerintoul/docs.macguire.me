
```bash
rsync [options] src[/] [user@host:]dest
# a trailing / after src specifies to copy the contents of src rather than the directory itself

# Options
-a # stands for 'archive' - preserves dates, symlinks, permissions, etc.
-e # specify the command (e.g. for ssh options)
-n # dry run
-h # human-readable numbers
-P # progress & partial
-q # suppress non-error messages (useful for fixing issues)
-v # verbose
-z # adds compression
```

[How To Use Rsync to Sync Local and Remote Directories | DigitalOcean](https://www.digitalocean.com/community/tutorials/how-to-use-rsync-to-sync-local-and-remote-directories)
