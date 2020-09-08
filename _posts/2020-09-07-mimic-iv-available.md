---
layout: post
title: MIMIC-IV is now available!
description: New modular structure, year of admission, chest-xrays and data up to 2019. Check out our overview on the new MIMIC release.
image: /assets/images/mimic.png
authors:
    - lbulgarelli
    - alistairewj
---

![](/assets/images/mimic.png)
<p style="font-size: .8em; padding: 0 15px;" markdown="1">
MIMIC-IV is available for all credentialed researchers. Access is through [Physionet](https://physionet.org/content/mimiciv). Check out the [documentation](https://mimic-iv.mit.edu) for more details.
</p>

It can be hard to find data available to conduct research, more so a single source containing all the information you might need. If you want your research to be completely reproducible, your search is then reduced to a handful of publicly available databases. MIMIC-III was for long the single source of public data from Intensive Care Units. But what happens when your article is not accepted for publication in a journal because said database was considered "old data"?

**You ~~cry~~ download MIMIC-IV.**

But really, we have developed the brand new MIMIC to be much more than just up-to-date information.

So let's dive in and see what it is all about.

&nbsp;  
## The all *new* data

In the third version of MIMIC, there were two different systems from which the ICU data was sourced, *carevue* and *metavision*. This occurred due to a change in the ICU system during the period comprised by the database. As a core principle of sharing the data was distributing it "as-is" to reflect real clinical practice, we had different representations of the same clinical concept depending on the date a patient was admitted.

Now, if you have worked with MIMIC-III, you probably know all about the pains of wrangling data from the two systems and you have your own grudge with *carevue*. You might have even given up more recently and excluded carevue patients altogheter from your study. Indeed, all the work might not be worth considering carevue admissions happened 12-19 years ago.

After executing a carrefuly plotted vendetta, we have finally **dropped *carevue***. Now, the available data from the ICU is acquired only from *metavision*. Having a single source of data simplifies data extraction considerable. Considering that we are now including data up to **2019 (yay!)**, *metavision* will award us with *11 years* of data.

Is that enough?

<div style="margin: 25px 75px;"><blockquote class="twitter-tweet mx-auto"><p lang="en" dir="ltr">MIMIC-IV is public! ~70,000 ICU stays, deidentified, ready for research. It&#39;s only 7 GB! ... but with &gt;300 million charted observations, there&#39;s a lot to dig through. Quick thread on the highlights. <a href="https://t.co/N6Rzrrkjxg">https://t.co/N6Rzrrkjxg</a></p>&mdash; Alistair Johnson (@alistairewj) <a href="https://twitter.com/alistairewj/status/1295406346788012035?ref_src=twsrc%5Etfw">August 17, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script></div>

Even with the exclusion of *carevue*, we ended up with more ICU stays than we had in MIMIC-III.

But, what does it mean to have more recent data available?

**Things change, and so does the standard of care**. Having up-to-date information will allow studies to include the most current treatments into their analysis, better reflecting reality and hopefully increasing the chances of obtaining more significant improvements in healthcare. Ventilation practices have markedly changed over the past 15 years, all for the better, and MIMIC-IV opens the door to improving even further.

&nbsp;  
## Modular design


&nbsp;  
## Medications

Studying the effect of various treatments is a burgeoning field of retrospective observational research. MIMIC-III was no exception, though it could be hard to infer from the database when a patient was receiveing a given treatment, as only intravenous medications were routinely documented. Enter the electronic Medicine Administration Record (eMAR).

![](https://pbs.twimg.com/media/Efozfq3XYAA6zMm?format=jpg&name=small)
<p style="font-size: .8em; padding: 0 15px;" markdown="1">
eMAR is now included and provides more precise information about the drugs being administered.
</p>

Bedside staff will scan barcodes for each individual formulary unit of a medication when administering it. This allows for a granular, high resolution record of when a medication was given. eMAR, while a rich and excellent source of information, was only recently implemented and as such roughly half of the patients in MIMIC-IV have eMAR data. Not to fear: the prescriptions table has been upgraded from MIMIC-III. All start and stop dates have been augmented with the time of day, and the time at which the prescription was entered is also available.

&nbsp;  
## Chest X-Rays

![](https://pbs.twimg.com/media/Efozs-6WoAMZxDO?format=jpg&name=small)
<p style="font-size: .8em; padding: 0 15px;" markdown="1">
caption
</p>

MIMIC-IV and [MIMIC-CXR](https://physionet.org/content/mimic-cxr/) use the same subject identifiers, and are implicitly linked. You can analyze full resolution chest x-rays with their corresponding clinical data. Unprecedented opportunities in multimodal data analysis here.


&nbsp;  
## Non-patient identifiers


&nbsp;  
## Timing information


&nbsp;  
## Patient tracking


&nbsp;  
## Is that all you got?

**NO** - MIMIC-IV is a very comprehensive database and there are many things to talk about!

Fortunately, @alistairewj has shared some more details about it in his recent tutorial at ACM CHIL 2020. You can access it in [here](https://chilconference.org/tutorial_d.html).

But there are a lot of things we still haven't covered.

Not to worry, if find yourself lost in this sea of data, you can check out the [docs](https://mimic-iv.mit.edu) or the [mimic-iv repository on github](https://github.com/MIT-LCP/mimic-iv). There you can ask questions, open issues and **contribute**.

We will not stop improving MIMIC-IV! So stick around our official channels for any news. 
