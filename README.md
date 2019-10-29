# code-challenges-career-track

## 'oops!' file renaming code challenge

### Plan of attack

- There are 4 asynchronous functions involved in this task: read dir, read file, read stats, rename file.
- The async functions need to be cascaded from the initial returned array of file names to ensure the files are renamed with the correctly read content and stats.

Chunks to break up the problem:
1. read dir
  - outcome: an array of file names is returned
  - valid if: 

