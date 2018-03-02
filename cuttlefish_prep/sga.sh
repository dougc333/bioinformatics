#!/bin/bash

sga index -a ropebwt --no-reverse -t 56 sgastats.fastq
sga preqc -t 56 sgastats.fastq > sgastats.preqc
sga-preqc-report.py sgastats.preqc sga/src/examples/*.preqc
