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
## Actual year included

Or almost.

From comparing the changes in outcome according to the availability of new treatments, being able to select patients in a period in which a specific drug was most recommended, or even including only the most recent admissions. Tell us, *what is it you truly desire?* 

For any of these, you need information on what date the patient was admitted. Because MIMIC needs to be HIPAA compliant in order to be public, the real precise dates can't be in the database. But we can keep some of the information. **MIMIC-III kept the day of the week and season** consistent with the real information, and while some researchers might have used this in their studies, others have asked for the inclusion of the year the patient was admitted. While we can argue about which is more important, the fact is, they can't both be included. It has been 5 years rom the launch of MIMIC-III, so for the fourth version, we have decided to give opportunity for new research to be conducted.

**MIMIC-IV has the *approximate* year of the events**. 

But hey, why not the exact date? Through the entire process of building the dabase, we have special care in protecting personal information, this is a result of it.

How does this look exatcly? We will explain in the next section.

&nbsp;  
## MIMIC in flavors

**We have big plans for MIMIC**, and they don't fit in one dataset.

Now, MIMIC has multiple modules: CORE, HOSP, ED, ICU, and CXR.

The practical meaning of this change is a greater transparency on the type and source of the data, with the additional flexibility to download and use only the data you need. Let's go into the details for each flavor.

#### MIMIC-CORE

It is as the name says, the core of MIMIC. It has information that is necessary to navigate any and accross all MIMIC flavors.

![](/assets/images/mimic-iv-available/mimic-core.jpg)

The interactions of every health system begins with the **patient**. They are feeling unwell, and hopefully seek for a physician to get orientation or if necessary, a treatment. In the case that the patient goes to Beth Israel Deaconess Medical Center's emergency room or is referred there by a physician, he will start his interaction with the system from which MIMIC collects its data.

Throughout his hospital **admission**, the patient might need to navigate the hospital buildings and wards for different examinations. These changes in a patient's location inside the hospital are referred to as **transfers**. That's how we are able to know the patient's status and their footprints, *but most importantly*, the information on MIMIC-CORE.

**patients, admissions, and transfers**.

Let's start with the **patient**.

`subject_id` | `anchor_age` | `anchor_year` | `anchor_year_group`
--- | --- | --- | ---
10014729 | 21 | 2125 | 2011 - 2013

<p style="font-size: .8em; padding: 0 15px; margin-top: 10px;" markdown="1">
Partial view on the **patients** table showing patient 10014729.
</p>

Here, `subject_id` identifies a single patient. Very important to note, in the modular designed introduced in MIMIC-IV, this is the main link between them. Here we will follow patient 10014729.

You might have noticed we have two *year* fields here.

That happens in deidentification, when have all dates on MIMIC shifted into the future. For each patient, we end up with the following:

- The earliest year into which his data was shifted is available in `anchor_year`.
- `anchor_age` is simply the age of such patient in the `anchor_year`.
- `anchor_year_group` corresponds to the approximate real year of his first event in the database. 

Using the example patient, it means that:

- The first time 10014729 had any data stored on MIMIC was in fictional 2125.
- He was 21 years old in 2125.
- The fictional year of 2125 happened somewhere between 2011 and 2013.

Hopefully not too hard.

Now, on to **admissions**.

`subject_id` | `hadm_id` | `edregtime` | `edouttime`
--- | --- | --- | ---
10014729 | 28889419 |  | 
10014729 | 23300884 | 2125-03-19T12:36:00 | 2125-03-19T18:45:00

<p style="font-size: .8em; padding: 0 15px; margin-top: 10px;" markdown="1">
Partial view on the **admissions** emergercy room times for patient 10014729.
</p>

`subject_id` | `hadm_id` | `admittime` | `dischtime`
--- | --- | --- | ---
10014729 | 28889419 | 2125-02-27T07:15:00 | 2125-03-06T14:25:00
10014729 | 23300884 | 2125-03-19T16:58:00 | 2125-03-28T13:37:00

<p style="font-size: .8em; padding: 0 15px; margin-top: 10px;" markdown="1">
Partial view on the **admissions** table with admission times for patient 10014729.
</p>

Here we can see that our example patient has been admitted to the hospital twice, in February 27th and March 19 of 2125. His second admission being preceded by a visit to the emergency room. 

If you carefully examine that admission, you will notice that `admittime` i.e. the time the patient was admitted to the hospital, happens before `edouttime`. But wait, how can a patient be in two places?

Well, the ED and the hospital where the data is collected use different systems. The timing information provided, specially in the discharge, is not always precise.

As we said previously, we always try to publish the dataset as close as possible to the source data. Fixing this is not trivial, and it requires a substantial amount of data wrangling and data quality checks. We didn't want you to be unaware of that, so in the admissions table, we just provide you with the data as is.

But we are very appreciative of our users, and know that even if they were to put in the work to fix this, they wouldn't be able to check the quality of their work. So, we have worked to provide you with consistent timing information, putting a lot of effort to make sure it was as close to reality as possible. We provide that information in the **transfers** table, so let's look into it.

`hadm_id` | `transfer_id` | `intime` | `outtime`
--- | --- | --- | ---
23300884 | 33508676 | 2125-03-19T12:36:00 | 2125-03-19T16:59:47	
23300884 | 37378329 | 2125-03-19T16:59:47 | 2125-03-19T17:06:15
23300884 | 30225236 | 2125-03-19T17:06:15 | 2125-03-20T10:39:52
... | ... | ... | ...
23300884 | 36856361 | 2125-03-23T17:15:22 | 2125-03-28T13:44:57
23300884 | 35190340 | 2125-03-28T13:44:57 | 

<p style="font-size: .8em; padding: 0 15px; margin-top: 10px;" markdown="1">
Partial view on the **transfers** table for admission 23300884 of patient 10014729.
</p>

`hadm_id` | `transfer_id` | `eventtype` | `careunit`
--- | --- | --- | --- | --- | ---
23300884 | 33508676 | ED | Emergency Department
23300884 | 37378329 | admit | Vascular
23300884 | 30225236 | transfer | Vascular
... | ... | ... | ...
23300884 | 36856361 | transfer | Cardiac Surgery
23300884 | 35190340 | discharge |

<p style="font-size: .8em; padding: 0 15px; margin-top: 10px;" markdown="1">
Partial view on the **transfers** table for admission 23300884 of patient 10014729.
</p>

Here, you can see the times are aligned, each intime being the exact same as the outtime of the patient's last location. This table is straightforward, every change in the patient's location is recorded here, things to note:

- For emergency room visits, the `eventtype` will always be set to "ED".
- The time and care unit of the patient's admission to the hospital will have `eventy_type` set to `admit`
- The time of patient discharge from the hospital will be on available through the `intime` of the transfer with `eventy_type` set to "discharge".
- Any other change in the patient's location will have event_type `transfer`

We have finished MIMIC-CORE! Having a good unsderstading of this dataset will falicitate to work with one or multiple flavors of MIMIC, so we hope to have provided enough information.


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
