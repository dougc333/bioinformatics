#generates stats for original download
#!/bin/bash

echo "$HOME"

if [ ! -d "$HOME/fastqc_output" ]; then
  echo "making dir $HOME/fastqc_output"
  mkdir -p /$HOME/fastqc_output
fi
$HOME/FastQC/fastqc --outdir=/home/dc/fastqc_orig /home/dc/Downloads/Undetermined_S0_L001_R1_001.fastq.gz -t=50
$HOME/FastQC/fastqc --outdir=/home/dc/fastqc_orig /home/dc/Downloads/Undetermined_S0_L001_R2_001.fastq.gz -t=50
$HOME/FastQC/fastqc --outdir=/home/dc/fastqc_orig /home/dc/Downloads/Undetermined_S0_L002_R1_001.fastq.gz -t=50
$HOME/FastQC/fastqc --outdir=/home/dc/fastqc_orig /home/dc/Downloads/Undetermined_S0_L002_R2_001.fastq.gz -t=50
$HOME/FastQC/fastqc --outdir=/home/dc/fastqc_orig /home/dc/Downloads/Undetermined_S0_L003_R1_001.fastq.gz -t=50
$HOME/FastQC/fastqc --outdir=/home/dc/fastqc_orig /home/dc/Downloads/Undetermined_S0_L003_R2_001.fastq.gz -t=50
$HOME/FastQC/fastqc --outdir=/home/dc/fastqc_orig /home/dc/Downloads/Undetermined_S0_L004_R1_001.fastq.gz -t=50
$HOME/FastQC/fastqc --outdir=/home/dc/fastqc_orig /home/dc/Downloads/Undetermined_S0_L004_R2_001.fastq.gz -t=50
$HOME/FastQC/fastqc --outdir=/home/dc/fastqc_orig /home/dc/Downloads/Undetermined_S0_L005_R1_001.fastq.gz -t=50
$HOME/FastQC/fastqc --outdir=/home/dc/fastqc_orig /home/dc/Downloads/Undetermined_S0_L005_R2_001.fastq.gz -t=50
$HOME/FastQC/fastqc --outdir=/home/dc/fastqc_orig /home/dc/Downloads/Undetermined_S0_L007_R1_001.fastq.gz -t=50
$HOME/FastQC/fastqc --outdir=/home/dc/fastqc_orig /home/dc/Downloads/Undetermined_S0_L007_R2_001.fastq.gz -t=50
$HOME/FastQC/fastqc --outdir=/home/dc/fastqc_orig /home/dc/Downloads/Undetermined_S0_L008_R1_001.fastq.gz -t=50
$HOME/FastQC/fastqc --outdir=/home/dc/fastqc_orig /home/dc/Downloads/Undetermined_S0_L008_R2_001.fastq.gz -t=50

