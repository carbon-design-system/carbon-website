const Joi = require('joi');

const component = Joi.object({
  name: Joi.string().required(),
  link: Joi.string().uri().required(),
  description: Joi.string(),
  framework: Joi.string().valid('React', 'Angular', 'Vue'),
  design_asset: Joi.string().valid('Sketch', 'Adobe XD', 'Figma'),
  platform: Joi.string().valid('Web', 'iOS', 'Android'),
  aliases: Joi.array().items(Joi.string()).required(),
  maintainer: Joi.string().valid(
    'CD&AI',
    'Cloud PAL',
    'Watson Health',
    'Watson IoT'
  ),
  availability: Joi.string().valid('IBM Internal'),
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
