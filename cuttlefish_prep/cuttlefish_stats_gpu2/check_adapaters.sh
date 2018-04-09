#!/bin/bash

zcat /home/dc/Downloads/empty_S316_L008_R1_001.fastq.gz | grep CTGTCTCTTATACACATCT > output_R1_CTGTCTCTTATACACATCT.txt
zcat /home/dc/Downloads/empty_S316_L008_R2_001.fastq.gz | grep CTGTCTCTTATACACATCT > output_R2_CTGTCTCTTATACACATCT.txt

#NEXTERRA LMP READ1 and READ2 external adapter have this same prefix. Why? PCR reagent?
zcat /home/dc/Downloads/empty_S316_L008_R1_001.fastq.gz | grep GATCGGAAGAGC  > output_R1_GATCGGAAGAGC.txt
zcat /home/dc/Downloads/empty_S316_L008_R2_001.fastq.gz | grep GATCGGAAGAGC  > output_R2_GATCGGAAGAGC.txt

#NEXTERRA LMP middle part adapter
zcat /home/dc/Downloads/empty_S316_L008_R1_001.fastq.gz | grep ACACGTCTGAA  > output_R1_ACACGTCTGAA.txt
zcat /home/dc/Downloads/empty_S316_L008_R2_001.fastq.gz | grep ACACGTCTGAA  > output_R2_ACACGTCTGAA.txt

zcat /home/dc/Downloads/empty_S316_L008_R1_001.fastq.gz | grep CTCCAGTCAC  > output_R1_CTCCAGTCAC.txt
zcat /home/dc/Downloads/empty_S316_L008_R2_001.fastq.gz | grep CTCCAGTCAC  > output_R2_CTCCAGTCAC.txt

zcat /home/dc/Downloads/empty_S316_L008_R1_001.fastq.gz | grep CGTCGTGTAGGG  > output_R1_CGTCGTGTAGGG.txt
zcat /home/dc/Downloads/empty_S316_L008_R2_001.fastq.gz | grep CGTCGTGTAGGG  > output_R2_CGTCGTGTAGGG.txt


zcat /home/dc/Downloads/empty_S316_L008_R1_001.fastq.gz | grep AAAGAGTGT  > output_R1_AAAGAGTGT.txt
zcat /home/dc/Downloads/empty_S316_L008_R2_001.fastq.gz | grep AAAGAGTGT  > output_R2_AAAGAGTGT.txt




