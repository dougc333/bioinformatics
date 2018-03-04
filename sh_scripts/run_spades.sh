#!/bin/bash

time
python SPAdes-3.5.0-Linux/bin/spades.py -o assembly_picharia_spades -1 sratoolkit.2.8.2-1-ubuntu64/ERR1294016_1.fastq.gz -2 sratoolkit.2.8.2-1-ubuntu64/ERR1294016_2.fastq.gz

