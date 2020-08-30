import { deleteFile } from './deleteFile';
import { appendFile } from './appendFile';
import { readFile } from 'fs';
import { writeFile } from './writeFile';
import { rmdir } from './rmdir';
import { mkdir } from './mkdir';
import { fileExists } from './fileExists';

export { fileExists, mkdir, rmdir, writeFile, readFile, appendFile, deleteFile }