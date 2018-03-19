
<h3>cuttlefish</h3>


<body>
  <div tabindex="-1" id="notebook" class="border-box-sizing">
    <div class="container" id="notebook-container">

<div class="cell border-box-sizing text_cell rendered"><div class="prompt input_prompt">
</div>
<div class="inner_cell">
<div class="text_cell_render border-box-sizing rendered_html">
<h6>Cuttlefish Denovo Assembly Workflow</h6><p>We were presented with approximately 60G of data files from a cuttlefish sequence. This was not the egg. The goal 
is to generate a reference sequence</p><p><img src="c1.png"></p>
<p>A sample read looks like: 
<img src="c2.png"></p>
<p>This file is different from the SRR data which you download using the sra toolkit. A sample read from this reference
genome looks like. Note there is no 8 nucleotide sequence at the end of the @ line.:
<img src="c3.png"></p>

</div>
</div>
</div>
<div class="cell border-box-sizing text_cell rendered"><div class="prompt input_prompt">
</div>
<div class="inner_cell">
<div class="text_cell_render border-box-sizing rendered_html">
<p><h6>Illumina Background</h6>
Source:<a href="http://nextgen.mgh.harvard.edu/IlluminaChemistry.html">http://nextgen.mgh.harvard.edu/IlluminaChemistry.html</a></p>
<p>The cuttlefish read files are denoted by FileName.R1 and FileName.R2. Both of those files
are matched as paired reads where FileName=Undetermined_S0_L00X_001. The first step described as starting library
matches the Biocurious Library Prep class where we used the Nextera DNA Flex Library prep kit. There was a sample
sheet in the lab which described the adapters as we were adding them. Reading a single strand in one direction 
gives us reads in the R1 file and reading the same strand in the reverse direcion as the strand is bent down into an 
upside U and reversed gives us the R2 read. The lines in each file should be correlated to the same DNA half strand.</p>
<p><img src="i1.png">
<img src="i2.png">
<img src="i3.png"></p>

</div>
</div>
</div>
<div class="cell border-box-sizing text_cell rendered"><div class="prompt input_prompt">
</div>
<div class="inner_cell">
<div class="text_cell_render border-box-sizing rendered_html">
<p><h6>Paired Reads</h6>
From the above image flattening out the inverted u we get a sequence of 2 reads. The inverted u
is the flow cell reversing the reads. The first read is before step 6 and the second read is
after step 7. 
<img src="pr.png">
The filename_R1 and filename_R2 files represent these 2 reads. It does not matter trying to find out which one is forward and 
which one is reverse, both reads are reverse complements of each other. 
e.g. TTCAG&lt;-&gt;CTGAA</p>

</div>
</div>
</div>
<div class="cell border-box-sizing text_cell rendered"><div class="prompt input_prompt">
</div>
<div class="inner_cell">
<div class="text_cell_render border-box-sizing rendered_html">
<p><h6>Cause of bad reads</h6>
There are many causes of bad reads. 
A single nucleotide error from a reference genome can be from 
1)sequencer error,<br/> 
2) getting a copy from 1 chromosome and a copy from another 
chromosome, both of those nucleotides in a certain position may not agree and you get some
variation. <br/></p>
<p><p></p>
There are other types of non single nucleotide bad reads such as adapters joining together
and different types of sequencer errors. Low quality scores are considered errors. 
<img src="badreads.png">
<img src="readerror1.png">
    &lt;img src = "readerror2.png"&gt;
    &lt;img src = "readerror3.png"&gt;
    &lt;img src = "fastqformat.png"&gt;</p>

</div>
</div>
</div>
<div class="cell border-box-sizing text_cell rendered"><div class="prompt input_prompt">
</div>
<div class="inner_cell">
<div class="text_cell_render border-box-sizing rendered_html">
<h6>Checking the data -- Do not write programs</h6>
</div>
</div>
</div>
<div class="cell border-box-sizing text_cell rendered"><div class="prompt input_prompt">
</div>
<div class="inner_cell">
<div class="text_cell_render border-box-sizing rendered_html">
<p><h6>Running FastQC</h6>
What is a universal adapter? 
<a href="https://www.biostars.org/p/4798/">https://www.biostars.org/p/4798/</a></p>
<p><p></p>
Run over all the data with a bash script. Don't type in commands because you can't explain to someone what you
did if there is a problem. Make your own log system.</p>
<p><img src="cuttlefishfastqc1.png">
<img src="cuttlefishfastqc2.png"></p>

</div>
</div>
</div>
<div class="cell border-box-sizing text_cell rendered"><div class="prompt input_prompt">
</div>
<div class="inner_cell">
<div class="text_cell_render border-box-sizing rendered_html">
<p><h6>Tried 3 cleaning tools, AfterQC, trimmomatic, BBMap</h6>
Which one is better and why?</p>

</div>
</div>
</div>
<div class="cell border-box-sizing text_cell rendered"><div class="prompt input_prompt">
</div>
<div class="inner_cell">
<div class="text_cell_render border-box-sizing rendered_html">
<p><h6>AfterQC</h6>
The advantage of using AfterQC is it automatically selects the parameters for you. Since I have no experience in this
field I tried this as a first step and tried to examine the changes in the data after running a simple form of cleaning.</p>
<p><img src="afterqc1.png">
<img src="afterqc2.png">
<img src="afterqcoutput.png">
Note the parameters for trim_front and trim_tail are different. One is 15/0 the other 15/7. This step can also be 
done with trimmomatic but I don't understand how the sliding window works and how it is better.</p>

</div>
</div>
</div>
<div class="cell border-box-sizing text_cell rendered"><div class="prompt input_prompt">
</div>
<div class="inner_cell">
<div class="text_cell_render border-box-sizing rendered_html">
<p><h6>Removing Adapters/Barcodes with BBMap</h6>
The barcodes are added under file BBMap/resources/adapters.fa. This is a comprehensive list of the Illumina adapters.</p>

</div>
</div>
</div>
<div class="cell border-box-sizing code_cell rendered">
<div class="input">
<div class="prompt input_prompt">In&nbsp;[1]:</div>
<div class="inner_cell">
    <div class="input_area">
<div class=" highlight hl-ipython3"><pre><span></span><span class="n">Below</span> <span class="ow">is</span> <span class="n">a</span> <span class="n">comparison</span> <span class="n">of</span> <span class="n">BBMap</span> <span class="n">vs</span><span class="o">.</span> <span class="n">Trimmomatic</span><span class="o">.</span> <span class="n">Trimmomatic</span> <span class="n">on</span> <span class="n">left</span><span class="p">,</span> <span class="n">BBMap</span> <span class="n">on</span> <span class="n">right</span><span class="o">.</span> <span class="n">Adapter</span> <span class="n">content</span>
<span class="n">like</span> <span class="n">original</span> <span class="n">after</span> <span class="n">trimmomatic</span><span class="o">.</span> <span class="n">no</span> <span class="n">difference</span><span class="o">.</span> 
<span class="kn">from</span> <span class="nn">IPython.display</span> <span class="k">import</span> <span class="n">HTML</span><span class="p">,</span> <span class="n">display</span>
<span class="n">display</span><span class="p">(</span><span class="n">HTML</span><span class="p">(</span><span class="s2">&quot;&lt;table&gt;&lt;tr&gt;&lt;td&gt;&lt;img src=&#39;L007R2_orig.png&#39;&gt;&lt;/td&gt;&lt;td&gt;&lt;img src=&#39;L007R2_afterqc.png&#39;&gt;&lt;/td&gt;&lt;/tr&gt;&lt;/table&gt;&quot;</span><span class="p">))</span>
</pre></div>

</div>
</div>
</div>

<div class="output_wrapper">
<div class="output">


<div class="output_area">

<div class="prompt"></div>



<div class="output_html rendered_html output_subarea ">
<table><tr><td><img src='L007R2_orig.png'></td><td><img src='L007R2_afterqc.png'></td></tr></table>
</div>

</div>

</div>
</div>

</div>
<div class="cell border-box-sizing text_cell rendered"><div class="prompt input_prompt">
</div>
<div class="inner_cell">
<div class="text_cell_render border-box-sizing rendered_html">
<p><h6>Trimmomatic</h6>
Better on quality scores, they don't include the indexes so adapters not trimmed
worse on the adapter removal than AfterQC
<img src="trimmomatic1.png">
<img src="trimmomatic2.png">
The problem with trimmomatic is the index adapters are not in the file!!! 
<img src="trim_output.png"></p>

</div>
</div>
</div>
<div class="cell border-box-sizing code_cell rendered">
<div class="input">
<div class="prompt input_prompt">In&nbsp;[2]:</div>
<div class="inner_cell">
    <div class="input_area">
<div class=" highlight hl-ipython3"><pre><span></span><span class="c1">#original on left, trimmomatic on right. Much better!!! Trimmomatic not run on original dataset. Run </span>
<span class="c1">#after BBMAP? verfify. forgot. bbmap-&gt;trimmomatic-&gt;fastqc</span>
<span class="kn">from</span> <span class="nn">IPython.display</span> <span class="k">import</span> <span class="n">HTML</span><span class="p">,</span> <span class="n">display</span>
<span class="n">display</span><span class="p">(</span><span class="n">HTML</span><span class="p">(</span><span class="s2">&quot;&lt;table&gt;&lt;tr&gt;&lt;td&gt;&lt;img src=&#39;L007R1_orig.png&#39;&gt;&lt;/td&gt;&lt;td&gt;&lt;img src=&#39; L007R1_trimmomatic.png&#39;&gt;&lt;/td&gt;&lt;/tr&gt;&lt;/table&gt;&quot;</span><span class="p">))</span>
</pre></div>

</div>
</div>
</div>

<div class="output_wrapper">
<div class="output">


<div class="output_area">

<div class="prompt"></div>



<div class="output_html rendered_html output_subarea ">
<table><tr><td><img src='L007R1_orig.png'></td><td><img src=' L007R1_trimmomatic.png'></td></tr></table>
</div>

</div>

</div>
</div>

</div>
<div class="cell border-box-sizing code_cell rendered">
<div class="input">
<div class="prompt input_prompt">In&nbsp;[3]:</div>
<div class="inner_cell">
    <div class="input_area">
<div class=" highlight hl-ipython3"><pre><span></span><span class="c1">#orig on left, trimmomatic trim of adapters based on included Nexterra adapters. No indexes!!!!! </span>
<span class="kn">from</span> <span class="nn">IPython.display</span> <span class="k">import</span> <span class="n">HTML</span><span class="p">,</span> <span class="n">display</span>
<span class="n">display</span><span class="p">(</span><span class="n">HTML</span><span class="p">(</span><span class="s2">&quot;&lt;table&gt;&lt;tr&gt;&lt;td&gt;&lt;img src=&#39;L007R1_adapter_orig.png&#39;&gt;&lt;/td&gt;&lt;td&gt;&lt;img src=&#39;L007R1_adapter_trimmomatic.png&#39;&gt;&lt;/td&gt;&lt;/tr&gt;&lt;/table&gt;&quot;</span><span class="p">))</span>
</pre></div>

</div>
</div>
</div>

<div class="output_wrapper">
<div class="output">


<div class="output_area">

<div class="prompt"></div>



<div class="output_html rendered_html output_subarea ">
<table><tr><td><img src='L007R1_adapter_orig.png'></td><td><img src='L007R1_adapter_trimmomatic.png'></td></tr></table>
</div>

</div>

</div>
</div>

</div>
<div class="cell border-box-sizing code_cell rendered">
<div class="input">
<div class="prompt input_prompt">In&nbsp;[&nbsp;]:</div>
<div class="inner_cell">
    <div class="input_area">
<div class=" highlight hl-ipython3"><pre><span></span><span class="n">https</span><span class="p">:</span><span class="o">//</span><span class="n">www</span><span class="o">.</span><span class="n">biorxiv</span><span class="o">.</span><span class="n">org</span><span class="o">/</span><span class="n">content</span><span class="o">/</span><span class="n">early</span><span class="o">/</span><span class="mi">2018</span><span class="o">/</span><span class="mi">03</span><span class="o">/</span><span class="mi">01</span><span class="o">/</span><span class="mi">274100</span>
<span class="n">https</span><span class="p">:</span><span class="o">//</span><span class="n">github</span><span class="o">.</span><span class="n">com</span><span class="o">/</span><span class="n">OpenGene</span><span class="o">/</span><span class="n">fastp</span>
</pre></div>

</div>
</div>
</div>

</div>
<div class="cell border-box-sizing text_cell rendered"><div class="prompt input_prompt">
</div>
<div class="inner_cell">
<div class="text_cell_render border-box-sizing rendered_html">
<p><h6>Removing overrepresented sequences from paired files</h6>
<a href="https://www.biostars.org/p/279450/">https://www.biostars.org/p/279450/</a>
Use cutadapt</p>

</div>
</div>
</div>
<div class="cell border-box-sizing text_cell rendered"><div class="prompt input_prompt">
</div>
<div class="inner_cell">
<div class="text_cell_render border-box-sizing rendered_html">
<p><h6>Abyss testing the bloom filter fill rate</h6>
<img src="bloom1.png"></p>

</div>
</div>
</div>
<div class="cell border-box-sizing text_cell rendered"><div class="prompt input_prompt">
</div>
<div class="inner_cell">
<div class="text_cell_render border-box-sizing rendered_html">
<p><h6>How Assemblers Work</h6>
<img src="debruin1.png"></p>
<p><h6>Literature Review to find something that runs on my computer</h6></p>
<p><li>https://www.christinaboucher.com/files/1614/2137/9671/deBruijn.pdf</li></p>
<p><li>T. C. Conway and A. J. Bromage. Succinct data structures for assembling large
genomes. Bioinformatics, 27(4):479486, 2011.</li></p>
<p><li>R. Chikhi and G. Rizk. Space-efficient and exact de Bruijn graph representation
based on a Bloom filter. Algorithm. Mol. Biol., 8(22), 2012</li></p>
<p><li>, Bowe, Onodera, Sadakane and Shibuya, A. Bowe, T. Onodera, K. Sadakane, and T. Shibuya. Succinct de Bruijn graphs.
In Proc. WABI, pages 225–235, 2012.</li></p>
<p><li>] R. Chikhi, A. Limasset, S. Jackman, J. Simpson, and P. Medvedev. On the
representation of de Bruijn graphs. In Proc. RECOMB, pages 35–55, 2014.</li>
The above figure represents an Eulerian walk; walking the path such that each edge is only travelled once. A vertex
represents a single kmer of length K. Build the graph, simplify removing bubbles and
subgraphs which fall below a threshold, and perform a walk to produce K+1 length kmer reads producing 
a list of contigs. Contigs are assembled using overlap. The value of K has a direct impact on the quality of the graph
Too low a K results in more spurs and edges which when removed prevent assembly. Too high makes the graph sparse and 
disconnected. SPAdes uses multiple K values when running assembly. Abyss uses a distributed hash table which requres 336GB
for assembling the human genome. In 2011 Conway and Bromage used a sparse bitvector using 32GB, Chikhi and Rizk used a bloom 
filter which took 5.7GB and Bowe, Onodera, Sadakane and Shibuya used the Burrows Wheeler transform to derive a data structure
using 2.5GB. R. Chikhi, A. Limasset, S. Jackman, J. Simpson, and P. Medvedev used a FM index and minimizers to further reduce teh space to 1.5GB for tehe NA18507 dataset. 
<a href="https://github.com/jts/dbgfm">https://github.com/jts/dbgfm</a></p>

</div>
</div>
</div>
<div class="cell border-box-sizing text_cell rendered"><div class="prompt input_prompt">
</div>
<div class="inner_cell">
<div class="text_cell_render border-box-sizing rendered_html">
<p><h6>Overlapping graph Assemblers<h6>
Source: MIT Courseware</p>
<p><h6>sga w/fm indexes better performance than SOAPdeonovo(debruijn)</h6>
Given a set of kmers how to find a substring which includes all the kmers? 
Concatenate them all together. 
How to find the shortest common substring? Create an overlap graph and find a path where you use 1 edge only once. 
This turns out to be a solution to the genome assembly problem. The problem is there are often many paths in the 
graph and it is NP complete. There is no algorthm for finding the minimum cycle path. Trial and error. 
<img src="scs1.png">
SCS algorithm: start withlist of substriings; find lenght of overlap between each striing. 
The substrings are AAA AAB ABA ABB BAA BAB BBA BBB. The weights from AAA to AAB are 2 because the length of the 
overlap, AA is 2. Make edges beween all the vertexes which have overlap and label them.</p>

</div>
</div>
</div>
<div class="cell border-box-sizing text_cell rendered"><div class="prompt input_prompt">
</div>
<div class="inner_cell">
<div class="text_cell_render border-box-sizing rendered_html">
<p><img src="scs2.png">
<img src="scs3.png">
<img src="scs4.png">
<img src="scs5.png">
<img src="scs6.png">
<img src="scs7.png">
<img src="scs8.png">
<img src="scs9.png">
<img src="scs10.png">
<img src="scs11.png">
<img src="scs12.png">
<img src="scs13.png"></p>

</div>
</div>
</div>
<div class="cell border-box-sizing text_cell rendered"><div class="prompt input_prompt">
</div>
<div class="inner_cell">
<div class="text_cell_render border-box-sizing rendered_html">
<p><h6>Installing, build SGA</h6>
conda create -n sga python=3.6<br/>
<a href="https://github.com/open-source-parsers/jsoncpp">https://github.com/open-source-parsers/jsoncpp</a><br/>
current jsoncpp installed version is 1.7.4 as part of ubuntu 16.04LTS<br/> 
Requirement for bamtools is jsoncpp&gt;1.8.0. jsoncpp 1.8.3 gets installed as libjsoncpp.so.2 <br/>
<a href="https://github.com/pezmaster31/bamtools/wiki/Building-and-installing">https://github.com/pezmaster31/bamtools/wiki/Building-and-installing</a><br/>
<a href="https://github.com/jts/sga">https://github.com/jts/sga</a><br/>
bam compile -- cd into src directory and run ./configure<br/>
<img src="bamtools.png">
sga tools are in sga/bin not all the binaries are installed under /usr/local<br/>
<img src="sgainstall.png">
dc@dc-X10DAi:~$ cat sga.sh</p>
<h1 id="!/bin/bash-">!/bin/bash <br /><a class="anchor-link" href="#!/bin/bash-">&#182;</a></h1><p>sga index -a ropebwt --no-reverse -t 56 sgastats.fastq<br/>
sga preqc -t 56 sgastats.fastq &gt; sgastats.preqc<br/>
sga-preqc-report.py sgastats.preqc sga/src/examples/*.preqc<br/>
<img src="sgatime.png"></p>

</div>
</div>
</div>
<div class="cell border-box-sizing text_cell rendered"><div class="prompt input_prompt">
</div>
<div class="inner_cell">
<div class="text_cell_render border-box-sizing rendered_html">
<p><img src="cuttlefish_sga.png">
<img src="sgatime1.png">
<img src="sgatime2.png">
<img src="sgatime3.png">
<img src="sgatime4.png">
<img src="sgatime5.png">
<img src="sgatime6.png"></p>

</div>
</div>
</div>
<div class="cell border-box-sizing text_cell rendered"><div class="prompt input_prompt">
</div>
<div class="inner_cell">
<div class="text_cell_render border-box-sizing rendered_html">
<p><h6>Building your own assembler</h6>
<a href="http://nbviewer.jupyter.org/gist/BenLangmead/7237207">http://nbviewer.jupyter.org/gist/BenLangmead/7237207</a></p>

</div>
</div>
</div>
<div class="cell border-box-sizing text_cell rendered"><div class="prompt input_prompt">
</div>
<div class="inner_cell">
<div class="text_cell_render border-box-sizing rendered_html">
<p><h6>Velvet error</h6>
<img src="velveterror1.png"></p>

</div>
</div>
</div>
<div class="cell border-box-sizing text_cell rendered"><div class="prompt input_prompt">
</div>
<div class="inner_cell">
<div class="text_cell_render border-box-sizing rendered_html">
<p><h6>Running Abyss</h6>
On nontrimmed or adapter removed data
<img src="abyssnumreads.png"></p>

</div>
</div>
</div>
<div class="cell border-box-sizing code_cell rendered">
<div class="input">
<div class="prompt input_prompt">In&nbsp;[&nbsp;]:</div>
<div class="inner_cell">
    <div class="input_area">
<div class=" highlight hl-ipython3"><pre><span></span><span class="o">&lt;&gt;</span>
</pre></div>

</div>
</div>
</div>

</div>
    </div>
  </div>
</body>

 


</html>
