#!/bin/bash


trimmomatic/trimmomatic  PE -phred33 -threads 50  -trimlog /home/dc/trimlog  \
Downloads/Undetermined_S0_L001_R1_001.fastq.gz  Downloads/Undetermined_S0_L001_R2_001.fastq.gz \
trimmomatic_output/L001R1.fq.gz  trimmomatic_output/L001R1_unpaired.fq.gz  trimmomatic_output/L001R2.fq.gz \
trimmomatic_output/L001R2_unpaired.fq.gz ILLUMINACLIP:/home/dc/trimmomatic/adapters/NexteraPE-PE.fa:2:30:10 LEADING:3 TRAILING:3 SLIDINGWINDOW:4:15 \
MINLEN:36


trimmomatic/trimmomatic  PE -phred33 -threads 50  -trimlog /home/dc/trimlog2  \
Downloads/Undetermined_S0_L002_R1_001.fastq.gz  Downloads/Undetermined_S0_L002_R2_001.fastq.gz \
trimmomatic_output/L002R1.fq.gz  trimmomatic_output/L002R1_unpaired.fq.gz  trimmomatic_output/L002R2.fq.gz \
trimmomatic_output/L002R2_unpaired.fq.gz ILLUMINACLIP:/home/dc/trimmomatic/adapters/NexteraPE-PE.fa:2:30:10 LEADING:3 TRAILING:3 SLIDINGWINDOW:4:15 \
MINLEN:36

trimmomatic/trimmomatic  PE -phred33 -threads 50  -trimlog /home/dc/trimlog3  \
Downloads/Undetermined_S0_L003_R1_001.fastq.gz  Downloads/Undetermined_S0_L003_R2_001.fastq.gz \
trimmomatic_output/L003R1.fq.gz  trimmomatic_output/L003R1_unpaired.fq.gz  trimmomatic_output/L003R2.fq.gz \
trimmomatic_output/L003R2_unpaired.fq.gz ILLUMINACLIP:/home/dc/trimmomatic/adapters/NexteraPE-PE.fa:2:30:10 LEADING:3 TRAILING:3 SLIDINGWINDOW:4:15 \
MINLEN:36

trimmomatic/trimmomatic  PE -phred33 -threads 50  -trimlog /home/dc/trimlog4  \
Downloads/Undetermined_S0_L004_R1_001.fastq.gz  Downloads/Undetermined_S0_L004_R2_001.fastq.gz \
trimmomatic_output/L004R1.fq.gz  trimmomatic_output/L004R1_unpaired.fq.gz  trimmomatic_output/L004R2.fq.gz \
trimmomatic_output/L004R2_unpaired.fq.gz ILLUMINACLIP:/home/dc/trimmomatic/adapters/NexteraPE-PE.fa:2:30:10 LEADING:3 TRAILING:3 SLIDINGWINDOW:4:15 \
MINLEN:36

trimmomatic/trimmomatic  PE -phred33 -threads 50  -trimlog /home/dc/trimlog5  \
Downloads/Undetermined_S0_L005_R1_001.fastq.gz  Downloads/Undetermined_S0_L005_R2_001.fastq.gz \
trimmomatic_output/L005R1.fq.gz  trimmomatic_output/L001R1_unpaired.fq.gz  trimmomatic_output/L005R2.fq.gz \
trimmomatic_output/L005R2_unpaired.fq.gz ILLUMINACLIP:/home/dc/trimmomatic/adapters/NexteraPE-PE.fa:2:30:10 LEADING:3 TRAILING:3 SLIDINGWINDOW:4:15 \
MINLEN:36

#trimmomatic/trimmomatic  PE -phred33 -threads 50  -trimlog /home/dc/trimlog7  \
#Downloads/Undetermined_S0_L007_R1_001.fastq.gz  Downloads/Undetermined_S0_L007_R2_001.fastq.gz \
#trimmomatic_output/L007R1.fq.gz  trimmomatic_output/L001R7_unpaired.fq.gz  trimmomatic_output/L007R2.fq.gz \
#trimmomatic_output/L007R2_unpaired.fq.gz ILLUMINACLIP:/home/dc/trimmomatic/adapters/NexteraPE-PE.fa:2:30:10 LEADING:3 TRAILING:3 SLIDINGWINDOW:4:15 \
#MINLEN:36

trimmomatic/trimmomatic  PE -phred33 -threads 50  -trimlog /home/dc/trimlog8 \
Downloads/Undetermined_S0_L008_R1_001.fastq.gz  Downloads/Undetermined_S0_L008_R2_001.fastq.gz \
trimmomatic_output/L008R1.fq.gz  trimmomatic_output/L008R1_unpaired.fq.gz  trimmomatic_output/L008R2.fq.gz \
trimmomatic_output/L008R2_unpaired.fq.gz ILLUMINACLIP:/home/dc/trimmomatic/adapters/NexteraPE-PE.fa:2:30:10 LEADING:3 TRAILING:3 SLIDINGWINDOW:4:15 \
MINLEN:36
