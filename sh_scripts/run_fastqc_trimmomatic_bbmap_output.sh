#generates stats after trimmomatic 
#!/bin/bash

echo "$HOME"

if [ ! -d "$HOME/fastqc_trimmomatic" ]; then
  echo "making dir $HOME/fastqc_trimmomatic"
  mkdir -p /$HOME/fastqc_trimmomatic
fi
$HOME/FastQC/fastqc --outdir=/home/dc/fastqc_trimmomatic /home/dc/trimmomatic_output/L001R1.fq.gz -t=50
$HOME/FastQC/fastqc --outdir=/home/dc/fastqc_trimmomatic /home/dc/trimmomatic_output/L001R2.fq.gz -t=50
$HOME/FastQC/fastqc --outdir=/home/dc/fastqc_trimmomatic /home/dc/trimmomatic_output/L002R1.fq.gz -t=50
$HOME/FastQC/fastqc --outdir=/home/dc/fastqc_trimmomatic /home/dc/trimmomatic_output/L002R2.fq.gz -t=50
$HOME/FastQC/fastqc --outdir=/home/dc/fastqc_trimmomatic /home/dc/trimmomatic_output/L003R1.fq.gz -t=50
$HOME/FastQC/fastqc --outdir=/home/dc/fastqc_trimmomatic /home/dc/trimmomatic_output/L003R2.fq.gz -t=50
$HOME/FastQC/fastqc --outdir=/home/dc/fastqc_trimmomatic /home/dc/trimmomatic_output/L004R1.fq.gz -t=50
$HOME/FastQC/fastqc --outdir=/home/dc/fastqc_trimmomatic /home/dc/trimmomatic_output/L004R2.fq.gz -t=50
$HOME/FastQC/fastqc --outdir=/home/dc/fastqc_trimmomatic /home/dc/trimmomatic_output/L005R1.fq.gz -t=50
$HOME/FastQC/fastqc --outdir=/home/dc/fastqc_trimmomatic /home/dc/trimmomatic_output/L005R2.fq.gz -t=50
$HOME/FastQC/fastqc --outdir=/home/dc/fastqc_trimmomatic /home/dc/trimmomatic_output/L007R1.fq.gz -t=50
$HOME/FastQC/fastqc --outdir=/home/dc/fastqc_trimmomatic /home/dc/trimmomatic_output/L007R2.fq.gz -t=50
$HOME/FastQC/fastqc --outdir=/home/dc/fastqc_trimmomatic /home/dc/trimmomatic_output/L008R1.fq.gz -t=50
$HOME/FastQC/fastqc --outdir=/home/dc/fastqc_trimmomatic /home/dc/trimmomatic_output/L008R2.fq.gz -t=50

