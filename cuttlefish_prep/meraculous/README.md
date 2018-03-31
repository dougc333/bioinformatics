<!DOCTYPE html>
<html>

<p><h6>meraculousnotes Cuttlefish Assembly</h6>
source: <a href="https://www.melbournebioinformatics.org.au/tutorials/tutorials/assembly/assembly-protocol/">https://www.melbournebioinformatics.org.au/tutorials/tutorials/assembly/assembly-protocol/</a></p>

<p><h6>Assembly on cuttlefish</h6></p>
<li>R1/R2 files are left/right paired end reads. The lengths do not match up like the reference cases</li>
<li>SPAdes for bacteria; not for large genome assy. </li>
<li>Meraculous2 is not clear what the command line arguments should be</li><p><img src="mer1.png"></p>
<p><h6>Meraculous2 Prep</h6>
<img src="mer1a.png">
<img src="mer2.png"></p>
<p><img src="mer4.png">
<img src="mer5.png">
<img src="mer6.png">
<img src="mer7.png">
<img src="mer8.png">
<img src="mer9.png"></p>
<p>2018/02/22 17:51:15 meraculous.pl main:: 737> RUNNING STAGE: meraculous_import</p>
<p>2018/02/22 17:51:17 meraculous.pl main:: 737> RUNNING STAGE: meraculous_mercount</p>
<p>2018/02/22 17:52:32 meraculous.pl main:: 737> RUNNING STAGE: meraculous_mergraph</p>
<p>2018/02/22 17:54:04 meraculous.pl main:: 737> RUNNING STAGE: meraculous_ufx</p>
<p>2018/02/22 17:54:15 meraculous.pl main:: 737> RUNNING STAGE: meraculous_contigs</p>
<p>2018/02/22 17:54:20 meraculous.pl main:: 737> RUNNING STAGE: meraculous_bubble</p>
<p>2018/02/22 17:55:16 meraculous.pl main:: 737> RUNNING STAGE: meraculous_merblast</p>
<p>2018/02/22 17:55:59 meraculous.pl main:: 737> RUNNING STAGE: meraculous_ono</p>
<p>2018/02/22 17:56:55 meraculous.pl main:: 737> RUNNING STAGE: meraculous_gap_closure</p>
<p>2018/02/22 17:57:14 meraculous.pl main:: 737> RUNNING STAGE: meraculous_final_results</p>
<p>2018/02/22 17:57:14 meraculous.pl main:: 818> RUN COMPLETED SUCCESSFULLY !</p>
<p>2018/02/22 17:57:14 meraculous.pl main:: 828> Total run time: 359.151351 seconds.</p>
<p>2018/02/22 17:57:14 meraculous.pl main:: 830> Thank you for running Meraculous!</p>
</html>
