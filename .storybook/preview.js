import React from "react";

import { addDecorator } from '@storybook/react';
import AppolloWrapper from "../src/appollo";



addDecorator(storyFn => <AppolloWrapper>{storyFn()}</AppolloWrapper>);
