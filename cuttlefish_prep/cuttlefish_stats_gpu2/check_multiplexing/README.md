There are 2 sets of files in the cuttlefish download directory:
Undetermimed.xx.fastq.gz and empty.Rx.fastq.gz

the empty* are the real data
the Undeterminted* are when the barcodes are off by more than 1 mismatch:
Source: https://ngsc.med.upenn.edu/Experiments/Public_Data/Media/Public/FASTQ-Files.html

there should be a barcode file of format RUN_s_Lane_BARCODE.fastq.gz. We don't have this file. 
the paried end sequnecing is of format RUN_s_Lane_END_BARCODE.fastq.gz like
FGC1099_s_1_1_ACAGTG.fastq.gz

In the versions of the data we have, pst Casava1.8 the barcodes are not in the file name but 
now they are in the header called index sequence. (Verify)
https://en.wikipedia.org/wiki/FASTQ_format

Fastq files from NCBI use a NCBI SRA or sequence read archive format different from the Illumina format. 


Illumina uses a bcl2fastq tool to genrete the fastq files from bcl data. https://support.illumina.com/content/dam/illumina-support/documents/documentation/software_documentation/bcl2fastq/bcl2fastq_letterbooklet_15038058brpmi.pdf
The default name for demuplixed compressed files are Unaligned_xx.fastq.gz. 

Reads with undetermined indices will be called Undetermined_indices. Tehre should be a samplesheet.csv file 
which directs bcl2fastq how to assign reads to sampels and samples to projects. 

zcat Undetermined_S0_L001_R1_001.fastq.gz | grep @K00153  | cut -d: -f10 | grep -v "N" | sort | uniq -c | sort -r -n -k1



