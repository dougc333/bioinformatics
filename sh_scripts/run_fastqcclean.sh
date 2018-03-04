#generates stats for bbmap_output
#!/bin/bash

echo "$HOME"

if [ ! -d "$HOME/fastqc_clean" ]; then
  echo "making dir $HOME/fastqc_clean"
  mkdir -p /$HOME/fastqc_clean
fi
$HOME/FastQC/fastqc --outdir=/home/dc/fastqc_clean /home/dc/bbmap_output/L001_R1out.fastq.gz -t=50
$HOME/FastQC/fastqc --outdir=/home/dc/fastqc_clean /home/dc/bbmap_output/L001_R2out.fastq.gz -t=50
$HOME/FastQC/fastqc --outdir=/home/dc/fastqc_clean /home/dc/bbmap_output/L002_R1out.fastq.gz -t=50
$HOME/FastQC/fastqc --outdir=/home/dc/fastqc_clean /home/dc/bbmap_output/L002_R2out.fastq.gz -t=50
$HOME/FastQC/fastqc --outdir=/home/dc/fastqc_clean /home/dc/bbmap_output/L003_R1out.fastq.gz -t=50
$HOME/FastQC/fastqc --outdir=/home/dc/fastqc_clean /home/dc/bbmap_output/L003_R2out.fastq.gz -t=50
$HOME/FastQC/fastqc --outdir=/home/dc/fastqc_clean /home/dc/bbmap_output/L004_R1out.fastq.gz -t=50
$HOME/FastQC/fastqc --outdir=/home/dc/fastqc_clean /home/dc/bbmap_output/L004_R2out.fastq.gz -t=50
$HOME/FastQC/fastqc --outdir=/home/dc/fastqc_clean /home/dc/bbmap_output/L005_R1out.fastq.gz -t=50
$HOME/FastQC/fastqc --outdir=/home/dc/fastqc_clean /home/dc/bbmap_output/L005_R2out.fastq.gz -t=50
$HOME/FastQC/fastqc --outdir=/home/dc/fastqc_clean /home/dc/bbmap_output/L007_R1out.fastq.gz -t=50
$HOME/FastQC/fastqc --outdir=/home/dc/fastqc_clean /home/dc/bbmap_output/L007_R2out.fastq.gz -t=50
$HOME/FastQC/fastqc --outdir=/home/dc/fastqc_clean /home/dc/bbmap_output/L008_R1out.fastq.gz -t=50
$HOME/FastQC/fastqc --outdir=/home/dc/fastqc_clean /home/dc/bbmap_output/L008_R2out.fastq.gz -t=50

