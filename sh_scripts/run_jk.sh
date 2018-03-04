#!/bin/bash

time
megahit/megahit -t 32 -1 sratoolkit.2.8.2-1-ubuntu64/ERR1294016_1.fastq.gz  -2 sratoolkit.2.8.2-1-ubuntu64/ERR1294016_2.fastq.gz -o ERR1294016.megahit_asm


