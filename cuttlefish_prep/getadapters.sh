#!/bin/bash

zcat Downloads/Undetermined_S0_L001_R1_001.fastq.gz | head -n 3535150 | grep  @ | awk -F: '{print $10}' > adaptersL001R1

