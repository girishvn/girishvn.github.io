---
layout: page
title: Sensor Foundation Models
description: Making the most of wearable sensor signals
img: assets/img/publication_preview/sensorlm.gif
importance: 1
category: work
related_publications: true
---

Wearable sensors have become ubiquitous thanks to a variety of health tracking features. The resulting continuous and longitudinal measurements from everyday life generate large volumes of data. However, making sense of and leveraging these often unlabeled observations for actionable insights is non-trivial. Inspired by the success of pre-trained generalist models in the image and vision domains we developed a suite of Large Sensor Models (LSM), a class of foundation model tailored for wearable sensor data.

<!-- LSM 1 -->
### Proving Scaling in The Sensor Domain.
The success of large scale pre-training, as shown in the language and vision domains, is (in large part) driven by the ability of these models to scale -- where pre-trained models improves monotonically as data, model capacity, and compute resources are increased. 

In our ICLR'25 paper, *Scaling Wearable Foundaiton Models* {% cite narayanswamyscaling %} we show, for the first time, **that scaling laws apply in the wearable sensor domain.** In so doing we introduce [LSM-1](https://research.google/blog/scaling-wearable-foundation-models/) and explore the effects of large-scale pre-training on a number of health related downstreams including activity recognition, mood classification, and modeling human physiology.

<div class="row justify-content-sm-center">
    <div class="row">
        <div class="col-sm mt-1 mt-md-0 text-center">
            {% include figure.liquid loading="eager" path="assets/img/project_images/lsm1_hero_figure.png" title="lsm1 hero fig" class="img-fluid rounded z-depth-1" width="90%" zoomable="true" %}
        </div>
    </div>
    <div class="caption">
        We show that scaling laws apply in the wearable sensor domain, and in so doing train LSM, a foundaiton model for wearable sensor data.
    </div>
</div>


<div class="row justify-content-sm-center">
    <div class="row">
        <div class="col-sm mt-1 mt-md-0 text-center">
            {% include figure.liquid loading="eager" path="assets/img/publication_preview/lsm_scaling.gif" title="lsm1 hero fig" class="img-fluid rounded z-depth-1" width="50%" zoomable="true" %}
        </div>
    </div>
    <div class="caption">
        These results are further highlighted in this animation.
    </div>
</div>


<!-- LSM 2 -->
### Handling Missing Data.
Building on the success of LSM-1 we explored new strategies to improve the scaling of sensor foundaiton models. 
To do so we tackle an inevitable pitfall of data missingness.
Wearable sensor data is naturally fragmented, with missingness occuring for a number of reasons (battery drain,device removal/charging, environmental/electromagnetic noise, etc.). While previous approaches handled data missingness with imputation or data filtering, developing more elegant methods of handling this fundemental aspect of sensor signals ensures that LSM-like can leverage as much real data as possible.

In our paper *LSM-2: Learning from Incomplete Wearable Sensor Data* {% cite xu2025lsm %}, submitted to NeurIPS'25, we introduce AIM (adaptive and inherited masking), a means of cleverly leveraging masked-pretraining and the encoder's attention mask to ignore missing segments of data.

<div class="row justify-content-sm-center">
    <div class="row">
        <div class="col-sm mt-1 mt-md-0 text-center">
            {% include figure.liquid loading="eager" path="assets/img/project_images/lsm2_overview.png" title="lsm2 method" class="img-fluid rounded z-depth-1" width="90%" zoomable="true" %}
        </div>
    </div>
    <div class="caption">
        AIM gracefully handles data fragmentation by attention masking missing data.
    </div>
</div>

In so doing we develop [LSM-2](https://research.google/blog/lsm-2-learning-from-incomplete-wearable-sensor-data/), the second iteration of our Large Sensor Model family. We find that LSM-2 more efficiently learns from wearable sensor data and improves upon the scaling characteristics of its predecessor. We additionally extended downstream capabilities of the model to include 20-class activity recognition, hypertension and anxiety detection, [insulin resistance](https://en.wikipedia.org/wiki/Homeostatic_model_assessment) regression. 

<div class="row justify-content-sm-center">
    <div class="row">
        <div class="col-sm mt-1 mt-md-0 text-center">
            {% include figure.liquid loading="eager" path="assets/img/project_images/lsm2_scaling.png" title="lsm2 scaling" class="img-fluid rounded z-depth-1" width="90%" zoomable="true" %}
        </div>
    </div>
    <div class="caption">
        LSM-2 improves upon the scaling characteristics of LSM-1 by learning to model missingness.
    </div>
</div>

<!-- SensorLM -->
### Learning the Language of Sensor Signals.

Though sensor encoders are powerful tools in enabling activity tracking and disease detection, sensor signals are inherently difficult to interpret. For example, you would be easily able to differentiate a picture of a dog from that of a cat, but differentiating the HR signature of a runner from that of a mountain biker would prove less intuitive. To improve the explainability of sensor data we explored how best to correlate representations of sensor data with human language.

In our NeurIPS'25 submission *SensorLM: Learning the Language of Wearable Sensors* {% cite zhang2025sensorlm %}, we explore the pair-wise training of wearable sensor data with written descriptions of the data. In so doing we develop [SensorLM](https://research.google/blog/sensorlm-learning-the-language-of-wearable-sensors/). SensorLM extends the [CoCa](https://arxiv.org/abs/2205.01917) framework and integrates both a contrastive similarily to loss in addition to a captioning loss. In so doing SensorLM enables improved zero-shot classification, generalization to new health classes, cross modal retrieval, and caption generation for sensor data.

<div class="row justify-content-sm-center">
    <div class="row">
        <div class="col-sm mt-1 mt-md-0 text-center">
            {% include figure.liquid loading="eager" path="assets/img/publication_preview/sensorlm.gif" title="lsm1 hero fig" class="img-fluid rounded z-depth-1" width="70%" zoomable="true" %}
        </div>
    </div>
    <div class="caption">
        SensorLM gracefully handles sensor data and text, allowing improved understanding of wearable signals.
    </div>
</div>
