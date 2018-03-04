#!/bin/bash


 trimmomatic/trimmomatic PE -phred33 -threads 32 -trimlog /home/dc/testtrimwbbmapadapter Downloads/Undetermined_S0_L007_R1_001.fastq.gz Downloads/Undetermined_S0_L007_R2_001.fastq.gz /home/dc/L007R1.fq.gz /home/dc/L001R1_unpaired.fq.gz /home/dc/L007R2.fq.gz /home/dc/L007R2unpaired.fq.gz ILLUMINACLIP:/home/dc/BBMap/resources/adapters.fa:2:30:10 LEADING:3 TRAILING:3 SLIDINGWINDOW:4:20
