#!/bin/bash


trimmomatic/trimmomatic  PE -phred33 -threads 50  -trimlog /home/dc/trimlogbbmap1  \
bbmap_output/L001_R1out.fastq.gz  bbmap_output/L001_R2out.fastq.gz \
trimmomatic_bbmap_output/L001R1.fq.gz  trimmomatic_bbmap_output/L001R1_unpaired.fq.gz  trimmomatic_bbmap_output/L001R2.fq.gz \
trimmomatic_bbmap_output/L001R2_unpaired.fq.gz ILLUMINACLIP:/home/dc/trimmomatic/adapters/NexteraPE-PE.fa:2:30:10 LEADING:3 TRAILING:3 SLIDINGWINDOW:4:15 \
MINLEN:36


trimmomatic/trimmomatic  PE -phred33 -threads 50  -trimlog /home/dc/trimlogbbmap2  \
bbmap_output/L002_R1out.fastq.gz  bbmap_output/L002_R2out.fastq.gz \
trimmomatic_bbmap_output/L002R1.fq.gz  trimmomatic_bbmap_output/L002R1_unpaired.fq.gz  trimmomatic_bbmap_output/L002R2.fq.gz \
trimmomatic_bbmap_output/L002R2_unpaired.fq.gz ILLUMINACLIP:/home/dc/trimmomatic/adapters/NexteraPE-PE.fa:2:30:10 LEADING:3 TRAILING:3 SLIDINGWINDOW:4:15 \
MINLEN:36

trimmomatic/trimmomatic  PE -phred33 -threads 50  -trimlog /home/dc/trimlogbbmap3  \
bbmap_output/L003_R1out.fastq.gz  bbmap_output/L003_R2out.fastq.gz \
trimmomatic_bbmap_output/L003R1.fq.gz  trimmomatic_bbmap_output/L003R1_unpaired.fq.gz  trimmomatic_bbmap_output/L003R2.fq.gz \
trimmomatic_bbmap_output/L003R2_unpaired.fq.gz ILLUMINACLIP:/home/dc/trimmomatic/adapters/NexteraPE-PE.fa:2:30:10 LEADING:3 TRAILING:3 SLIDINGWINDOW:4:15 \
MINLEN:36

trimmomatic/trimmomatic  PE -phred33 -threads 50  -trimlog /home/dc/trimlogbbmap4  \
bbmap_output/L004_R1out.fastq.gz  bbmap_output/L004_R2out.fastq.gz \
trimmomatic_bbmap_output/L004R1.fq.gz  trimmomatic_bbmap_output/L004R1_unpaired.fq.gz  trimmomatic_bbmap_output/L004R2.fq.gz \
trimmomatic_bbmap_output/L004R2_unpaired.fq.gz ILLUMINACLIP:/home/dc/trimmomatic/adapters/NexteraPE-PE.fa:2:30:10 LEADING:3 TRAILING:3 SLIDINGWINDOW:4:15 \
MINLEN:36

trimmomatic/trimmomatic  PE -phred33 -threads 50  -trimlog /home/dc/trimlogbbmap5  \
bbmap_output/L005_R1out.fastq.gz  bbmap_output/L005_R2out.fastq.gz \
trimmomatic_bbmap_output/L005R1.fq.gz  trimmomatic_bbmap_output/L001R1_unpaired.fq.gz  trimmomatic_bbmap_output/L005R2.fq.gz \
trimmomatic_bbmap_output/L005R2_unpaired.fq.gz ILLUMINACLIP:/home/dc/trimmomatic/adapters/NexteraPE-PE.fa:2:30:10 LEADING:3 TRAILING:3 SLIDINGWINDOW:4:15 \
MINLEN:36

trimmomatic/trimmomatic  PE -phred33 -threads 50  -trimlog /home/dc/trimlogbbmap7  \
bbmap_output/L007_R1out.fastq.gz  bbmap_output/L007_R2out.fastq.gz \
trimmomatic_bbmap_output/L007R1.fq.gz  trimmomatic_bbmap_output/L007R1_unpaired.fq.gz  trimmomatic_bbmap_output/L007R2.fq.gz \
trimmomatic_bbmap_output/L007R2_unpaired.fq.gz ILLUMINACLIP:/home/dc/trimmomatic/adapters/NexteraPE-PE.fa:2:30:10 LEADING:3 TRAILING:3 SLIDINGWINDOW:4:15 \
MINLEN:36

trimmomatic/trimmomatic  PE -phred33 -threads 50  -trimlog /home/dc/trimlogbbmap8 \
bbmap_output/L008_R1out.fastq.gz  bbmap_output/L008_R2out.fastq.gz \
trimmomatic_bbmap_output/L008R1.fq.gz  trimmomatic_bbmap_output/L008R1_unpaired.fq.gz  trimmomatic_bbmap_output/L008R2.fq.gz \
trimmomatic_bbmap_output/L008R2_unpaired.fq.gz ILLUMINACLIP:/home/dc/trimmomatic/adapters/NexteraPE-PE.fa:2:30:10 LEADING:3 TRAILING:3 SLIDINGWINDOW:4:15 \
MINLEN:36
