const Joi = require('joi');

const component = Joi.object({
  aliases: Joi.array().items(Joi.string()).required(),
  availability: Joi.string().valid('IBM Internal', 'Open Source'),
  code_url: Joi.string().uri(),
  date_added: Joi.date(),
  description: Joi.string(),
  design_asset: Joi.string().valid('Sketch', 'Adobe XD', 'Figma'),
  framework: Joi.string().valid('React', 'Angular', 'Vanilla', 'Vue'),
  platform: Joi.string().valid('Web', 'iOS', 'Android'),
  website_url: Joi.string().uri(),

  // Mapped from `name`
  friendly_name: Joi.string().required(),

  // Generated
  name: Joi.string().required(),
  maintainer: Joi.object({
    name: Joi.string().required(),
    friendly_name: Joi.string().required(),
  }).required(),
});

const maintainer = Joi.object({
  maintainers: Joi.array()
    .items(
      Joi.object({
        name: Joi.string().required(),
        friendly_name: Joi.string().required(),
      })
    )
    .required(),
});

module.exports = {
  component,
  maintainer,
};
