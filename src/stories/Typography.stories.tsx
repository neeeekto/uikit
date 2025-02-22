import React from 'react';

import type {Meta, StoryFn} from '@storybook/react';

import {Typography} from '../demo/Typography/Typography';

export default {
    title: 'Typography',
} as Meta;

export const Common: StoryFn = () => <Typography />;
