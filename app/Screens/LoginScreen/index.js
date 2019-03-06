import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text} from 'react-native';
import { connect } from 'react-redux';
import { Button, TextInputCustom } from 'Components';
import { FormValidation, Alert } from 'Utils';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from '.styles';