---
title: "Register your Team"
description: ""
date: 2023-08-23T13:52:25+02:00
lastmod: 2023-08-23T13:52:25+02:00
draft: false
images: []
resources:
---

Register your team here. We would love to see a short description of your Hack, the Partners which you work with and an AI generated team logo.
Also provide the prompt and the model which you used to create this logo.

<div class="o-form">
  <form aria-label="Example form description">
    <h4>The Team in a Nutshell</h4>
    <div class="m-form-field">
      <div class="a-text-field">
        <label for="teamName">Team Name*</label>
        <input type="text" id="teamName" />
      </div>
    </div>
    <div class="m-form-field">
      <div class="a-text-area">
        <label for="description">Describe your Team*</label>
        <textarea id="description"></textarea>
      </div>
    </div>
    <h4>Partnered Tech & Use-Cases</h4>
    <div class="o-form__row">
      <div class="m-form-field">
        <div class="a-text-area">
          <label for="partner">Partner*</label>
          <textarea id="partner"></textarea>
        </div>
      </div>
      <div class="m-form-field">
        <div class="a-text-area">
          <label for="usecase">Use Cases/Tech*</label>
          <textarea id="usecase"></textarea>
        </div>
      </div>
    </div>
    <h4>Your Team Logo</h4>
    <div class="m-form-field">
      <div class="a-text-area">
        <label for="prompt">Your Prompt*</label>
        <textarea id="prompt"></textarea>
      </div>
    </div>
    <div class="m-form-field">
      <div class="a-text-field">
        <label for="model">Model Name*</label>
        <input type="text" id="model" />
      </div>
    </div>
    <div class="m-form-field">
      <div class="a-file-upload-input">
        <label for="file-upload-input-1">
          <i class="a-icon boschicon-bosch-ic-upload" title="upload icon"></i>
          Choose file*
        </label>
        <input id="file-upload-input-1" name="file upload input" type="file" />
        <div class="a-file-upload-input__preview"><p>No file chosen</p></div>
      </div>
    </div>
    <button
      type="submit"
      class="a-button a-button--primary -without-icon"
      data-frok-action="submit"
    >
      <span class="a-button__label">Submit form</span>
    </button>
    <p class="-size-s">Required fields *</p>
  </form>
</div>