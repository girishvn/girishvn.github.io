---
layout: page
title: Audio-Based Respiratory Sensing
description:
img: assets/img/project_images/cough_fig.png
importance: 3
category: work
related_publications: false
---

### Open Source Respiratory Detector Models.

Audio based respiratory sensing, where sounds relevant to respiratory health (e.g., speech, coughs) are classified or analyzed, has the possibility to significantly impact public health. For example, since coughs often precede flu season or new COVID waves, an aggregate cough estimates may act as a leading indicator, allowing healthcare systems to prepare for surges in patient volume. However, audio is a senstive modality, and safety measures are needed to ensure that only derived measures (e.g. cough counts, embeddings) are transmitted off-device.

During my time as a Student Researcher at Google I trained, evaluated, and open sourced efficient respiratory detection models. These TFLite detector models leverage a [MobileNet-V3](https://huggingface.co/docs/timm/en/models/mobilenet-v3) backbone, and are tailored to run on device. These models classify a number of useful respiratory events, and can be used for both real time audio sensing, or audio annotating. A similar model was used to filter data used to train [HeAR](https://github.com/Google-Health/hear), Google's audio foundation model for respiratory sounds.

The detector models I trained (along with documentation and demo notebooks) can now be found in the [HeAR github repo](https://github.com/Google-Health/hear) and on [HuggingFace](https://huggingface.co/google/hear/tree/main/event_detector).
