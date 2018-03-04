{
 "cells": [
  {
   "cell_type": "markdown",
   "metadata": {},
   "source": [
    "<h6>Cuttlefish Denovo Assembly Workflow</h6>\n",
    "\n",
    "<p>We were presented with approximately 60G of data files from a cuttlefish sequence. This was not the egg. The goal \n",
    "is to generate a reference sequence</p>\n",
    "\n",
    "<img src=\"c1.png\">\n",
    "\n",
    "A sample read looks like: \n",
    "<img src=\"c2.png\">\n",
    "\n",
    "This file is different from the SRR data which you download using the sra toolkit. A sample read from this reference\n",
    "genome looks like. Note there is no 8 nucleotide sequence at the end of the @ line.:\n",
    "<img src=\"c3.png\">"
   ]
  },
  {
   "cell_type": "markdown",
   "metadata": {},
   "source": [
    "<h6>Illumina Background</h6>\n",
    "Source:http://nextgen.mgh.harvard.edu/IlluminaChemistry.html\n",
    "        \n",
    "The cuttlefish read files are denoted by FileName.R1 and FileName.R2. Both of those files\n",
    "are matched as paired reads where FileName=Undetermined_S0_L00X_001. The first step described as starting library\n",
    "matches the Biocurious Library Prep class where we used the Nextera DNA Flex Library prep kit. There was a sample\n",
    "sheet in the lab which described the adapters as we were adding them. Reading a single strand in one direction \n",
    "gives us reads in the R1 file and reading the same strand in the reverse direcion as the strand is bent down into an \n",
    "upside U and reversed gives us the R2 read. The lines in each file should be correlated to the same DNA half strand. \n",
    "\n",
    "<img src=\"i1.png\">\n",
    "<img src=\"i2.png\">\n",
    "<img src=\"i3.png\">"
   ]
  },
  {
   "cell_type": "markdown",
   "metadata": {},
   "source": [
    "<h6>Paired Reads</h6>\n",
    "From the above image flattening out the inverted u we get a sequence of 2 reads. The inverted u\n",
    "is the flow cell reversing the reads. The first read is before step 6 and the second read is\n",
    "after step 7. \n",
    "<img src=\"pr.png\">\n",
    "The filename_R1 and filename_R2 files represent these 2 reads. It does not matter trying to find out which one is forward and \n",
    "which one is reverse, both reads are reverse complements of each other. \n",
    "e.g. TTCAG<->CTGAA\n"
   ]
  },
  {
   "cell_type": "markdown",
   "metadata": {},
   "source": [
    "<h6>Cause of bad reads</h6>\n",
    "There are many causes of bad reads. \n",
    "A single nucleotide error from a reference genome can be from \n",
    "1)sequencer error,<br/> \n",
    "2) getting a copy from 1 chromosome and a copy from another \n",
    "chromosome, both of those nucleotides in a certain position may not agree and you get some\n",
    "variation. <br/>\n",
    "<p></p>\n",
    "There are other types of non single nucleotide bad reads such as adapters joining together\n",
    "and different types of sequencer errors. Low quality scores are considered errors. \n",
    "<img src=\"badreads.png\">\n",
    "<img src=\"readerror1.png\">\n",
    "    <img src = \"readerror2.png\">\n",
    "    <img src = \"readerror3.png\">\n",
    "    <img src = \"fastqformat.png\">"
   ]
  },
  {
   "cell_type": "markdown",
   "metadata": {},
   "source": [
    "<h6>Checking the data -- Do not write programs</h6>\n",
    "\n",
    "\n",
    "\n",
    "\n",
    "\n",
    "\n",
    "\n",
    "\n"
   ]
  },
  {
   "cell_type": "markdown",
   "metadata": {},
   "source": [
    "<h6>Running FastQC</h6>\n",
    "What is a universal adapter? \n",
    "https://www.biostars.org/p/4798/\n",
    "    \n",
    "<p></p>\n",
    "Run over all the data with a bash script. Don't type in commands because you can't explain to someone what you\n",
    "did if there is a problem. Make your own log system. \n",
    "\n",
    "<img src=\"cuttlefishfastqc1.png\">\n",
    "<img src=\"cuttlefishfastqc2.png\">\n",
    "    "
   ]
  },
  {
   "cell_type": "markdown",
   "metadata": {},
   "source": [
    "<h6>Tried 3 cleaning tools, AfterQC, trimmomatic, BBMap</h6>\n",
    "Which one is better and why?"
   ]
  },
  {
   "cell_type": "markdown",
   "metadata": {},
   "source": [
    "<h6>AfterQC</h6>\n",
    "The advantage of using AfterQC is it automatically selects the parameters for you. Since I have no experience in this\n",
    "field I tried this as a first step and tried to examine the changes in the data after running a simple form of cleaning.\n",
    "\n",
    "<img src=\"afterqc1.png\">\n",
    "<img src=\"afterqc2.png\">\n",
    "<img src=\"afterqcoutput.png\">\n",
    "Note the parameters for trim_front and trim_tail are different. One is 15/0 the other 15/7. This step can also be \n",
    "done with trimmomatic but I don't understand how the sliding window works and how it is better. "
   ]
  },
  {
   "cell_type": "markdown",
   "metadata": {},
   "source": [
    "<h6>Removing Adapters/Barcodes with BBMap</h6>\n",
    "The barcodes are added under file BBMap/resources/adapters.fa. This is a comprehensive list of the Illumina adapters. \n",
    "\n"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 1,
   "metadata": {},
   "outputs": [
    {
     "data": {
      "text/html": [
       "<table><tr><td><img src='L007R2_orig.png'></td><td><img src='L007R2_afterqc.png'></td></tr></table>"
      ],
      "text/plain": [
       "<IPython.core.display.HTML object>"
      ]
     },
     "metadata": {},
     "output_type": "display_data"
    }
   ],
   "source": [
    "Below is a comparison of BBMap vs. Trimmomatic. Trimmomatic on left, BBMap on right. Adapter content\n",
    "like original after trimmomatic. no difference. \n",
    "from IPython.display import HTML, display\n",
    "display(HTML(\"<table><tr><td><img src='L007R2_orig.png'></td><td><img src='L007R2_afterqc.png'></td></tr></table>\"))"
   ]
  },
  {
   "cell_type": "markdown",
   "metadata": {},
   "source": [
    "<h6>Trimmomatic</h6>\n",
    "Better on quality scores, they don't include the indexes so adapters not trimmed\n",
    "worse on the adapter removal than AfterQC\n",
    "<img src=\"trimmomatic1.png\">\n",
    "<img src=\"trimmomatic2.png\">\n",
    "The problem with trimmomatic is the index adapters are not in the file!!! \n",
    "<img src=\"trim_output.png\">"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 2,
   "metadata": {},
   "outputs": [
    {
     "data": {
      "text/html": [
       "<table><tr><td><img src='L007R1_orig.png'></td><td><img src=' L007R1_trimmomatic.png'></td></tr></table>"
      ],
      "text/plain": [
       "<IPython.core.display.HTML object>"
      ]
     },
     "metadata": {},
     "output_type": "display_data"
    }
   ],
   "source": [
    "#original on left, trimmomatic on right. Much better!!! Trimmomatic not run on original dataset. Run \n",
    "#after BBMAP? verfify. forgot. bbmap->trimmomatic->fastqc\n",
    "from IPython.display import HTML, display\n",
    "display(HTML(\"<table><tr><td><img src='L007R1_orig.png'></td><td><img src=' L007R1_trimmomatic.png'></td></tr></table>\"))\n"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 3,
   "metadata": {},
   "outputs": [
    {
     "data": {
      "text/html": [
       "<table><tr><td><img src='L007R1_adapter_orig.png'></td><td><img src='L007R1_adapter_trimmomatic.png'></td></tr></table>"
      ],
      "text/plain": [
       "<IPython.core.display.HTML object>"
      ]
     },
     "metadata": {},
     "output_type": "display_data"
    }
   ],
   "source": [
    "#orig on left, trimmomatic trim of adapters based on included Nexterra adapters. No indexes!!!!! \n",
    "from IPython.display import HTML, display\n",
    "display(HTML(\"<table><tr><td><img src='L007R1_adapter_orig.png'></td><td><img src='L007R1_adapter_trimmomatic.png'></td></tr></table>\"))"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": null,
   "metadata": {},
   "outputs": [],
   "source": [
    "https://www.biorxiv.org/content/early/2018/03/01/274100\n",
    "https://github.com/OpenGene/fastp\n"
   ]
  },
  {
   "cell_type": "markdown",
   "metadata": {},
   "source": [
    "<h6>Removing overrepresented sequences from paired files</h6>\n",
    "https://www.biostars.org/p/279450/\n",
    "Use cutadapt\n",
    "    "
   ]
  },
  {
   "cell_type": "markdown",
   "metadata": {},
   "source": [
    "<h6>Abyss testing the bloom filter fill rate</h6>\n",
    "<img src=\"bloom1.png\">"
   ]
  },
  {
   "cell_type": "markdown",
   "metadata": {},
   "source": [
    "<h6>How Assemblers Work</h6>\n",
    "<img src=\"debruin1.png\">\n",
    "<h6>Literature Review to find something that runs on my computer</h6>\n",
    "<li>https://www.christinaboucher.com/files/1614/2137/9671/deBruijn.pdf</li>\n",
    "<li>T. C. Conway and A. J. Bromage. Succinct data structures for assembling large\n",
    "genomes. Bioinformatics, 27(4):479486, 2011.</li>\n",
    "<li>R. Chikhi and G. Rizk. Space-efficient and exact de Bruijn graph representation\n",
    "based on a Bloom filter. Algorithm. Mol. Biol., 8(22), 2012</li>\n",
    "<li>, Bowe, Onodera, Sadakane and Shibuya, A. Bowe, T. Onodera, K. Sadakane, and T. Shibuya. Succinct de Bruijn graphs.\n",
    "In Proc. WABI, pages 225–235, 2012.</li>\n",
    "<li>] R. Chikhi, A. Limasset, S. Jackman, J. Simpson, and P. Medvedev. On the\n",
    "representation of de Bruijn graphs. In Proc. RECOMB, pages 35–55, 2014.</li>\n",
    "The above figure represents an Eulerian walk; walking the path such that each edge is only travelled once. A vertex\n",
    "represents a single kmer of length K. Build the graph, simplify removing bubbles and\n",
    "subgraphs which fall below a threshold, and perform a walk to produce K+1 length kmer reads producing \n",
    "a list of contigs. Contigs are assembled using overlap. The value of K has a direct impact on the quality of the graph\n",
    "Too low a K results in more spurs and edges which when removed prevent assembly. Too high makes the graph sparse and \n",
    "disconnected. SPAdes uses multiple K values when running assembly. Abyss uses a distributed hash table which requres 336GB\n",
    "for assembling the human genome. In 2011 Conway and Bromage used a sparse bitvector using 32GB, Chikhi and Rizk used a bloom \n",
    "filter which took 5.7GB and Bowe, Onodera, Sadakane and Shibuya used the Burrows Wheeler transform to derive a data structure\n",
    "using 2.5GB. R. Chikhi, A. Limasset, S. Jackman, J. Simpson, and P. Medvedev used a FM index and minimizers to further reduce teh space to 1.5GB for tehe NA18507 dataset. \n",
    "https://github.com/jts/dbgfm\n",
    "    "
   ]
  },
  {
   "cell_type": "markdown",
   "metadata": {},
   "source": [
    "<h6>Overlapping graph Assemblers<h6>\n",
    "Source: MIT Courseware \n",
    "<h6>sga w/fm indexes better performance than SOAPdeonovo(debruijn)</h6>\n",
    "Given a set of kmers how to find a substring which includes all the kmers? \n",
    "Concatenate them all together. \n",
    "How to find the shortest common substring? Create an overlap graph and find a path where you use 1 edge only once. \n",
    "This turns out to be a solution to the genome assembly problem. The problem is there are often many paths in the \n",
    "graph and it is NP complete. There is no algorthm for finding the minimum cycle path. Trial and error. \n",
    "<img src=\"scs1.png\">\n",
    "SCS algorithm: start withlist of substriings; find lenght of overlap between each striing. \n",
    "The substrings are AAA AAB ABA ABB BAA BAB BBA BBB. The weights from AAA to AAB are 2 because the length of the \n",
    "overlap, AA is 2. Make edges beween all the vertexes which have overlap and label them. \n",
    "\n"
   ]
  },
  {
   "cell_type": "markdown",
   "metadata": {},
   "source": [
    "<img src=\"scs2.png\">\n",
    "<img src=\"scs3.png\">\n",
    "<img src=\"scs4.png\">\n",
    "<img src=\"scs5.png\">\n",
    "<img src=\"scs6.png\">\n",
    "<img src=\"scs7.png\">\n",
    "<img src=\"scs8.png\">\n",
    "<img src=\"scs9.png\">\n",
    "<img src=\"scs10.png\">\n",
    "<img src=\"scs11.png\">\n",
    "<img src=\"scs12.png\">\n",
    "<img src=\"scs13.png\">"
   ]
  },
  {
   "cell_type": "markdown",
   "metadata": {},
   "source": [
    "<h6>Installing, build SGA</h6>\n",
    "conda create -n sga python=3.6<br/>\n",
    "https://github.com/open-source-parsers/jsoncpp<br/>\n",
    "current jsoncpp installed version is 1.7.4 as part of ubuntu 16.04LTS<br/> \n",
    "Requirement for bamtools is jsoncpp>1.8.0. jsoncpp 1.8.3 gets installed as libjsoncpp.so.2 <br/>\n",
    "https://github.com/pezmaster31/bamtools/wiki/Building-and-installing<br/>\n",
    "https://github.com/jts/sga<br/>\n",
    "bam compile -- cd into src directory and run ./configure<br/>\n",
    "<img src=\"bamtools.png\">\n",
    "sga tools are in sga/bin not all the binaries are installed under /usr/local<br/>\n",
    "<img src=\"sgainstall.png\">\n",
    "dc@dc-X10DAi:~$ cat sga.sh\n",
    "#!/bin/bash <br/>\n",
    "\n",
    "sga index -a ropebwt --no-reverse -t 56 sgastats.fastq<br/>\n",
    "sga preqc -t 56 sgastats.fastq > sgastats.preqc<br/>\n",
    "sga-preqc-report.py sgastats.preqc sga/src/examples/*.preqc<br/>\n",
    "<img src=\"sgatime.png\">"
   ]
  },
  {
   "cell_type": "markdown",
   "metadata": {},
   "source": [
    "<img src=\"cuttlefish_sga.png\">\n",
    "<img src=\"sgatime1.png\">\n",
    "<img src=\"sgatime2.png\">\n",
    "<img src=\"sgatime3.png\">\n",
    "<img src=\"sgatime4.png\">\n",
    "<img src=\"sgatime5.png\">\n",
    "<img src=\"sgatime6.png\">\n"
   ]
  },
  {
   "cell_type": "markdown",
   "metadata": {},
   "source": [
    "<h6>Building your own assembler</h6>\n",
    "http://nbviewer.jupyter.org/gist/BenLangmead/7237207\n"
   ]
  },
  {
   "cell_type": "markdown",
   "metadata": {},
   "source": [
    "<h6>Velvet error</h6>\n",
    "<img src=\"velveterror1.png\">"
   ]
  },
  {
   "cell_type": "markdown",
   "metadata": {},
   "source": [
    "<h6>Running Abyss</h6>\n",
    "On nontrimmed or adapter removed data\n",
    "<img src=\"abyssnumreads.png\">"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": null,
   "metadata": {},
   "outputs": [],
   "source": [
    "<>"
   ]
  }
 ],
 "metadata": {
  "kernelspec": {
   "display_name": "Python 3",
   "language": "python",
   "name": "python3"
  },
  "language_info": {
   "codemirror_mode": {
    "name": "ipython",
    "version": 3
   },
   "file_extension": ".py",
   "mimetype": "text/x-python",
   "name": "python",
   "nbconvert_exporter": "python",
   "pygments_lexer": "ipython3",
   "version": "3.6.1"
  }
 },
 "nbformat": 4,
 "nbformat_minor": 2
}
