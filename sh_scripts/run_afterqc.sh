#!/bin/bash


#pypy after.py -1 ../Downloads/Undetermined_S0_L001_R1_001.fastq.gz -2 ../Downloads/Undetermined_S0_L001_R2_001.fastq.gz -g /home/dc/L001_good/ -b /home/dc/L001_bad/ --trim_front=-1 --trim_tail=-1
pypy after.py -1 ../bbmap_output/L001_R1out.fastq.gz -2 ../bbmap_output/L001_R2out.fastq.gz -g /home/dc/afterqc_output/L001R1.fastq.gz -b /home/dc/afterqc_output/L001R2.fastqc.gz --trim_front=-1 --trim_tail=-1


pypy after.py -1 ../bbmap_output/L002_R1out.fastq.gz -2 ../bbmap_output/L002_R2out.fastq.gz -g /home/dc/afterqc_output/L002R1.fastq.gz -b /home/dc/afterqc_output/L002R2.fastqc.gz --trim_front=-1 --trim_tail=-1

pypy after.py -1 ../bbmap_output/L003_R1out.fastq.gz -2 ../bbmap_output/L003_R2out.fastq.gz -g /home/dc/afterqc_output/L003R1.fastq.gz -b /home/dc/afterqc_output/L003R2.fastqc.gz --trim_front=-1 --trim_tail=-1

pypy after.py -1 ../bbmap_output/L004_R1out.fastq.gz -2 ../bbmap_output/L004_R2out.fastq.gz -g /home/dc/afterqc_output/L004R1.fastq.gz -b /home/dc/afterqc_output/L004R2.fastqc.gz --trim_front=-1 --trim_tail=-1

pypy after.py -1 ../bbmap_output/L005_R1out.fastq.gz -2 ../bbmap_output/L005_R2out.fastq.gz -g /home/dc/afterqc_output/L005R1.fastq.gz -b /home/dc/afterqc_output/L005R2.fastqc.gz --trim_front=-1 --trim_tail=-1

pypy after.py -1 ../bbmap_output/L007_R1out.fastq.gz -2 ../bbmap_output/L007_R2out.fastq.gz -g /home/dc/afterqc_output/L007R1.fastq.gz -b /home/dc/afterqc_output/L007R2.fastqc.gz --trim_front=-1 --trim_tail=-1

pypy after.py -1 ../bbmap_output/L008_R1out.fastq.gz -2 ../bbmap_output/L008_R2out.fastq.gz -g /home/dc/afterqc_output/L008R1.fastq.gz -b /home/dc/afterqc_output/L008R2.fastqc.gz --trim_front=-1 --trim_tail=-1

