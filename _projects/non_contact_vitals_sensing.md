---
layout: page
title: Non-Contact Vital Sensing
description: Making health ubiquitous
img: assets/img/publication_preview/bigsmall.gif
importance: 2
category: work
related_publications: true
---

Clinical vital signs (pulse signals, respiratory signals, temperature, blood pressure, etc.) are important indicators of a person's physiological function and health. Historically, these are measured by a trained profession using a specialty contact equipment (e.g., pulse oximeter, blood pressure cuff, etc.) during in-person clinical visits. As such, these methods act only as spot checks and only scale to areas with robust healthcare resrouces. As a result non-contact vital sensing, which enables continuous, convenient, monitoring without the need for contact sensors, is becoming increasingly important. This form of technology holds particular value in telemedicine, public health, and patient monitoring in clinical and home settings, offering scalable options for longitudinal tracking, and improved accessibility to healthcare.

<!-- RPPG Intro and RPPG Toolbox -->

### Remote Photoplethysmography (RPPG)

Remote photoplethysmography (rPPG) is a method of non-contact pulse sensing. Specifically rPPG captures the blood volume pulse (BVP) from a camera by detecting subtle changes in skin color (micro-blush) associated with pulsatile blood flow. While traditionally done with signal-processing based methods, the current state-of-the-art relies on deep neural networks trained on video data.

To promote the growth of the field we released [rPPG Toolbox](https://github.com/ubicomplab/rPPG-Toolbox). This open source repository hosts the infrastructure needed to utilize **9 datasets**, leverage **7 statistical models**, and train **10 state-of-the-art neural models**. The impact of this work is illustrated by the github repositories' **750+ Stars** and **190+ Forks**. The repository has been leveraged by **130+** published works. This work was featured in out NeurIPS'23 papge {% cite liu2023rppg %}.

<div class="row justify-content-sm-center">
    <div class="row">
        <div class="col-sm mt-1 mt-md-0 text-center">
            {% include figure.liquid loading="eager" path="assets/img/project_images/toolbox_overview.png" title="rPPG Toolbox" class="img-fluid rounded z-depth-1" width="80%" zoomable="true" %}
        </div>
    </div>
    <div class="caption">
        A breakdown of the rPPG Toolbox. Dataset and model support has since been signficantly expanded, thanks, to our active community!
    </div>
</div>

<div class="row justify-content-sm-center">
    <div class="row">
        <div class="col-sm mt-1 mt-md-0 text-center">
            {% include figure.liquid loading="eager" path="assets/img/publication_preview/rppg_toolbox.jpg" title="rPPG Toolbox" class="img-fluid rounded z-depth-1" width="80%" zoomable="true" %}
        </div>
    </div>
    <div class="caption">
        An illustrations of the signals processing based unsupervised methods and state-of-the-art neural methods.
    </div>
</div>

### BigSmall: More Capable Non-Contact Sensing

While most state-of-the-art non-contact physiological sensing models focus on a single target signal there are known correlations between physiological signals (e.g., respiratory sinus arrhythmia correlate heart and respiratory signals). A such, a model should be able to leverage these correlations to build a more general representation and improve performance.

In our WACV'24 paper we introduce BigSmall {% cite narayanswamy2024bigsmall %}., an efficient network architecture for multi-task physiological sensing. BigSmall concurrently derives photoplethysmography (pulse), respiration, and action unit signals from videos of the face.

<div class="row justify-content-sm-center">
    <div class="row">
        <div class="col-sm mt-1 mt-md-0 text-center">
            {% include figure.liquid loading="eager" path="assets/img/project_images/bigsmall_arch.jpg" title="bigsmall example" class="img-fluid rounded z-depth-1" width="80%" zoomable="true" %}
        </div>
    </div>
    <div class="caption">
        The BigSmall network architecture.
    </div>
</div>

BigSmall leverages temporal and spatial scales in the architecture to implicitly capture high-resolution spatial details while also attending to low-resolution temporal activity. BigSmall further benefits from its use of novel wrapping temporal shift modules (WTSMs), which allow for improved temporal understanding while minimizing latency.
Experimental results demonstrate that BigSmall significantly reduces upon the computational cost of standalone physiological sensing models while providing comparable or better performance. More details are provided at our [project page](https://girishvn.github.io/BigSmall/).

<div class="row justify-content-sm-center">
    <div class="row">
        <div class="col-sm mt-1 mt-md-0 text-center">
            {% include figure.liquid loading="eager" path="assets/img/publication_preview/bigsmall.gif" title="bigsmall example" class="img-fluid rounded z-depth-1" width="80%" zoomable="true" %}
        </div>
    </div>
    <div class="caption">
        BigSmall simultaneously dervies pulse, respiratory, and facial action signals.
    </div>
</div>

### More Subtle Vital Signs

Ubiqutous solutions for determining blood pressure has been a long standing problem that has has significant implications for public health.
Towards this, we explored the feasibility of sensing blood pressure via an rPPG-like model. To build a dataset appropriate for this analysis we collected video recordings (appropriate for rPPG) from 134 cardiac patients (a total of 143 visits) from UW Medicine. These recordings were paired with simultaneous collection of pulse signal/rate and blood oxygen saturation via contact PPG, respiratory rate/signal via thoracic band, single-lead ECG. Cuff-based blood pressure was collected pre and post each recording. Data was paired with demographic records and clinical history. The data collection and all analysis was IRB approved.
Our initial BP model indicated that rPPG-like methods could be leveraged to more accurately estimate BP and detect hypertension, but more work (are larger studies) are need to make such methods truly ubiqutous. Please seee the following papers for more results {% cite curran2023camera curran2025estimating %}.

<div class="row justify-content-sm-center">
    <div class="row">
        <div class="col-sm mt-1 mt-md-0 text-center">
            {% include figure.liquid loading="eager" path="assets/img/publication_preview/rppg_bp_teaser.png" title="bigsmall example" class="img-fluid rounded z-depth-1" width="80%" zoomable="true" %}
        </div>
    </div>
    <div class="caption">
        The rPPG BP model leverages pulse features derived from facial video paired with demographic information to improve upon hypertension prediction.
    </div>
</div>
