// Copyright 2026, Command Line Inc.
// SPDX-License-Identifier: Apache-2.0

import { AIPanel } from "@/app/aipanel/aipanel";
import { atom } from "jotai";

export class WaveAiModel implements ViewModel {
    viewType = "waveai";
    viewIcon = atom("sparkles");
    viewName = atom("Wave AI");
    noPadding = atom(true);
    viewComponent = AIPanel;

    constructor(_: ViewModelInitType) {}
}
