---
title: Taste Is a Loss Function
date: Aug 2025
---

Taste is usually treated as a matter of sensibility. It is what critics have and machines do not. But the gap between sensibility and computation is narrower than it seems. Every time a human selects one work over another, they are performing a comparison. Every comparison implies an ordering. An ordering is a mapping from the space of possible works to a scalar value. That mapping is a function. And if a function exists, it can, in principle, be approximated.[^1] [^2]

The tempting simplification is to think of taste as just another ranking problem. Train on enough positive and negative pairs, and you can push the positives up and the negatives down. But this misses something important: taste is not monolithic. It is an entangled bundle of constraints and values, some of which can be quantified cleanly and some of which remain stubbornly opaque.

Structural taste concerns correctness: a symphony resolving in key, a building obeying basic geometry, a scene maintaining lighting continuity. Aesthetic taste concerns balance, proportion, rhythm, texture. [^3] Contextual taste concerns meaning: whether a work resonates with a particular cultural moment, plays with or against a genre’s conventions, or fits the voice of a specific creator. [^4]

When people judge, they blend these without noticing. A painting that violates proportion might still be loved because of its context or emotional impact. A perfectly lit photograph might be ignored because it feels hollow. Machines, by contrast, must be told exactly how to resolve such conflicts. And that act of weighting, deciding whether coherence is more important than originality or if beauty should trump fidelity, is not a technical parameter. It is a declaration of values.

Formally, one could write:

$$T(x) = α · S_{semantic}(x) + β · S_{aesthetic}(x) − γ · P_{incoherence}(x)$$

Here, α, β, and γ are priorities. Increasing α is to say: accuracy first. Increasing β says: beauty matters more than literal fit. Decreasing γ says: we can live with a little chaos if the rest sings. Every tweak to these weights shifts the output space and thus shifts the kind of world the system constructs.

Once T(x) is defined, it can be made into a loss function:

$$L_{taste} = max(0, m − (T(x^{+}) − T(x^{-})))$$

where x⁺ is the preferred work, x⁻ the less preferred, and m a margin enforcing that preferred works score significantly higher. This is the easy part: pairwise ranking is old ground. [^5] The hard part is building T(x) so that it is not brittle. Human taste is adaptive; it reacts to novelty. A static function risks collapsing into self-parody, optimizing toward a frozen aesthetic until every output feels like a variation on the same theme. A human critic can revise their taste in response to new work. A machine will only do so if the definition of taste itself is dynamic.

And this leads to a deeper problem: if you can formalize taste, you can also optimize for it. This makes it vulnerable to overfitting. Just as models trained on benchmarks can “game” the metric without genuine improvement, systems can learn to mimic the superficial signals of taste without capturing its deeper logic. Think of the “Instagram look”: high-contrast, shallow depth of field. This emerged not because it is inherently better, but because the algorithms rewarded it. A taste function, once public, invites exploitation.

The absence of a taste function is not neutral either. In its place, models will learn the default taste of the training corpus. That taste is not the collective wisdom of humanity; it is the statistical median of what was easiest to scrape. The result is not wrong, but it is bland. It is taste without tension, stripped of the extremes that make human curation interesting.

So the question is not only can we formalize taste, but should we, and under what rules. Whose taste will it encode? Will it update over time, and if so, who decides the updates? Do we want a single shared taste function, or a multitude, competing and coexisting like critics in a city? The technical problem of approximating taste is solvable. The societal problem of deciding which tastes to scale is not so easily closed.

Taste is not an inexpressible mystery. It is a messy, multidimensional, and value-laden signal. If we can define it, we can measure it. If we can measure it, we can optimize for it. And if we can optimize for it, we can shape the aesthetic of everything the machine touches. That power is too great to treat as an afterthought.

----

[^1]: O’Doherty, J. et al. (2020). How the brain creates your taste in art. Caltech.
[^2]: Chatterjee, A. et al. (2010). Neural responses to the visual aesthetics of paintings. Brain and Cognition, 72(3), 310–314.
[^3]: Redies, C. (2015). Combining universal beauty and cultural context in a unifying model of visual aesthetic experience. Frontiers in Human Neuroscience.
[^4]: Murray, N., Marchesotti, L., & Perronnin, F. (2012). AVA: A Large-Scale Database for Aesthetic Visual Analysis. IEEE Conference on Computer Vision and Pattern Recognition (CVPR)
[^5]: Li, Z. et al. (2023). Explainable AI-Based Multi-Attribute Aesthetic Ranking. arXiv preprint arXiv:2311.14410.