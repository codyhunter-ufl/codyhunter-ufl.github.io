import pano from '../assets/images/pano.jpg'
import seated from '../assets/images/seated.jpeg'
import rockyStream from '../assets/images/rockystream.jpeg'
import hiking from '../assets/images/hikingimage.jpeg'
import portfolioPdf from '../assets/images/cHunter_GeoE_Portfolio.pdf'
import resumePdf from '../assets/images/cHunterCV(Aug2025).pdf'
import shieldFig1 from '../assets/figs/shieldfig1.jpg'
import shieldFig2 from '../assets/figs/shieldfig2.jpg'
import shieldFig3 from '../assets/figs/shieldfig3.jpg'
import mineralFig1 from '../assets/figs/mineralfig1.jpg'
import mineralFig2 from '../assets/figs/mineralfig2.jpg'
import mineralFig3 from '../assets/figs/mineralfig3.jpg'
import vogFig1 from '../assets/figs/vogfig1.png'
import vogFig2 from '../assets/figs/vogfig2.png'
import vogFig3 from '../assets/figs/vogfig3.jpg'
import vogFig4 from '../assets/figs/vogfig4.jpg'
import brooksFig1 from '../assets/figs/characterfig1.jpg'
import impactFig1 from '../assets/figs/impactfig1.jpg'
import impactFig2a from '../assets/figs/impactfig2a.png'
import impactFig2b from '../assets/figs/impactfig2b.png'
import impactFig2c from '../assets/figs/impactfig2c.png'
import impactFig3 from '../assets/figs/impactfig3.jpg'

// Shared assets keep page components free of long import lists.
export const assets = {
  pano,
  seated,
  rockyStream,
  hiking,
  portfolioPdf,
  resumePdf,
}

// Each project page is rendered from this data object so the layout stays consistent.
export const projects = [
  {
    slug: 'shield-vs-strato',
    title: 'Shield vs. Stratovolcanoes: Comparing Hazards of Volcanism in Hawaiʻi and Washington',
    listTitle: 'Shield vs. Stratovolcanoes',
    subtitle: 'Comparing Hazards of Volcanism in Hawaiʻi and Washington',
    meta: [
      ['Course', 'GIS4324 — GIS Analysis of Hazard Vulnerability'],
      ['Instructor', 'Dr. Kevin Ash'],
      ['Date', 'Spring 2025'],
    ],
    sections: [
      {
        title: 'Background',
        paragraphs: [
          `Volcanic hazards vary considerably between volcano types, with shield volcanoes and stratovolcanoes representing the two principal categories. Shield volcanoes, such as Mauna Loa on the Big Island of Hawaiʻi, produce low-viscosity basaltic lavas capable of traveling tens of kilometers, gradually building vast low-sloping structures through frequent eruptions. Their primary hazards are lava flows, vog (volcanic smog), and eruption-related earthquakes. Stratovolcanoes, such as Mount St. Helens in Washington State, are fed by rhyolitic or andesitic magmas of much higher viscosity, which requires substantial pressure to move and produces infrequent but extraordinarily violent explosive eruptions. These events generate a broader range of hazards, including pyroclastic flows, lahars, tephra fall, and large earthquakes, with the potential to disrupt infrastructure at a regional or even global scale.`,
          `This project addresses the question of how the hazards associated with Mauna Loa and Mount St. Helens differ in terms of spatial distribution, frequency, and social vulnerability, and what those differences imply for risk mitigation and emergency planning. The analysis focuses on the 2022 Mauna Loa eruption and the 1980 Mount St. Helens eruption as the primary case studies for each volcano.`,
        ],
      },
      {
        title: 'Data',
        paragraphs: [
          `Several datasets were integrated for this analysis. USGS Lava-Flow Hazard Zone Maps for Hawaii Island, originally from Open-File Report 74-239 (Mullineaux & Peterson, 1974) and reformatted by Wright et al. (1992), classify the island into nine zones from highest (Zone 1) to lowest (Zone 9) hazard based on historical flow coverage and proximity to vents. USGS geospatial data for the November 27–December 10, 2022, Mauna Loa eruption provided polygon shapefiles of active lava-flow margins and fissure vents. Infrastructure zoning data (classifying parcels as Urban, Agricultural, Rural, or Conservation) along with a Native Hawaiian Land dataset, were sourced from the Hawaiʻi State Office of Planning and Sustainable Development.`,
          `For Mount St. Helens, hazard extents (pyroclastic-flow, lahar, and ashfall) were sourced from the USGS Washington Simplified Hazards Map and Open-File Report 95-497 (Wolfe & Pierson, 1995), capturing the spatial footprint of the May 18, 1980, VEI 5 eruption. A post-eruption map from the U.S. Forest Service Pacific Northwest Research Station was georeferenced in ArcGIS Pro, and a KMZ file compiled by photographer Kelly Michals provided the locations of all 57 confirmed fatalities from the 1980 eruption.`,
          `Tract-level population and housing data from the U.S. Census Bureau's American Community Survey 2016–2020 5-year Summary File supported the exposure assessment, while FEMA's National Risk Index (NRI) provided tract-level volcanic hazard risk scores incorporating expected annual loss, social vulnerability, and hazard frequency. A USGS Washington simplified hazard map covering pyroclastic-flow, lahar, and regional lava flow extents for the entire state of Washington was also included for broader context.`,
        ],
      },
      {
        title: 'Methods',
        paragraphs: [
          `Analysis was conducted primarily in ArcGIS Pro. The U.S. Forest Service post-eruption map of the 1980 Mount St. Helens event was georeferenced against a DEM of the Cascade Range to establish accurate spatial positioning of the lateral blast, pyroclastic-flow, and lahar extents. The 57 confirmed fatality locations were then overlaid on this georeferenced map to visualize where lives were lost relative to each hazard zone. All layers were reprojected to NAD 1983 UTM (Zone 4N for Hawaiʻi; Zone 10N for Washington) to ensure consistent spatial referencing across datasets.`,
          `For Mauna Loa, the 2022 eruption lava-flow polygons were overlaid on the Hawaii State infrastructure zoning layer and intersected with the Native Hawaiian Land dataset to assess land-use impacts. The USGS Lava-Flow Hazard Zones (1–9) were added to provide the broader hazard context for the island. A basic population exposure assessment was conducted by clipping 2020 census tract boundaries to each hazard and eruption footprint for both study areas.`,
          `FEMA NRI volcanic hazard scores were extracted for census tracts in both Hawaii and Washington and mapped to allow direct comparison of risk levels between the two states. The combination of hazard extents, population exposure, infrastructure zoning, and NRI scores produced maps illustrating where lava flows, pyroclastic flows, lahars, and ashfall intersect with resident populations and critical infrastructure.`,
        ],
      },
      {
        title: 'Results',
        paragraphs: [
          `The 2022 Mauna Loa eruption produced a lava flow approximately 19 km in length that traveled northeast from the summit rift, crossing the Mauna Loa Weather Observatory access road before stopping 2.8 km short of the Daniel K. Inouye Highway (Saddle Road). The eruption covered approximately 31 km² and was the first by Mauna Loa in 38 years. Although USGS Lava-Flow Hazard Zones 1–3 collectively encompass roughly 22% of Hawaii Island's area, the 2022 flow intersected only conservation-zoned land, with no damage to urban or rural infrastructure. Approximately 45,000 residents, about 23% of the Big Island's population, live within Zones 1–2, along with portions of the Saddle Road, power lines, and larger population centers such as Hilo.`,
          `The May 18, 1980, Mount St. Helens eruption, triggered by a magnitude 5+ earthquake that released a massive flank collapse and lateral blast, was rated VEI 5. Pyroclastic and debris avalanches scoured approximately 57 km² around the crater, while lahars inundated 16 km² of downstream floodplain in the North Fork Toutle and Muddy River valleys. Ashfall blanketed over 57,000 km² across Washington, Oregon, and Idaho, depositing 1 cm or more of ash across roughly 22,000 mi². Approximately 12,000 people reside within the combined pyroclastic-flow and lahar zones, with an additional estimated 650,000 at risk of receiving significant ashfall in a comparable future eruption. Critical transportation infrastructure, including the I-5 corridor, Spirit Lake Highway, and freight rail, falls within high-ashfall zones.`,
          `FEMA NRI volcanic hazard scores further reflect the contrast between the two volcanoes. Census tracts across Hawaii Island score below 50 on the 0–100 NRI scale, placing the island comparatively low in national volcanic risk rankings. Washington tracts within pyroclastic and lahar zones reach scores into the 90s, driven primarily by historic-loss ratios from the 1980 eruption, estimated at $3.3 billion in direct and indirect losses, and by the broad downwind ashfall exposure that extends well beyond the immediate blast zone.`,
        ],
      },
    ],
    figures: [
      [shieldFig1, 'Georeferenced USFS post-eruption map of the May 18, 1980, Mount St. Helens eruption', 'Figure 1: Georeferenced U.S. Forest Service Pacific Northwest Research Station post-eruption map of the May 18, 1980, Mount St. Helens eruption, showing lateral blast, pyroclastic-flow, and lahar disturbance zones against a DEM of the Cascade Range. Red points indicate the locations of all 57 confirmed fatalities.', true],
      [shieldFig2, 'USGS Lava-Flow Hazard Zones and 2022 Mauna Loa eruption footprint', 'Figure 2: USGS Lava-Flow Hazard Zones (Zones 1–9) for Hawaii Island, with Zone 1 representing the highest hazard (above), and the footprint of the November 27–December 10, 2022, Mauna Loa eruption overlaid on Hawaii State infrastructure zoning classes (below).'],
      [shieldFig3, 'FEMA NRI volcanic hazard scores for Hawaii Island and Washington State', 'Figure 3: FEMA National Risk Index (NRI) volcanic hazard scores by census tract for Hawaii Island (left) and Washington State (right), on a 0–100 scale. Hawaii tracts score below 50 throughout; Washington tracts within pyroclastic-flow and lahar zones reach scores into the 90s.'],
    ],
  },
  {
    slug: 'mineral-exploration',
    title: 'Enhancing Mineral Exploration through Remote Sensing and Machine Learning: A Focus on Cobalt and Nickel in New Caledonia',
    listTitle: 'Enhancing Mineral Exploration through Remote Sensing and Machine Learning',
    subtitle: 'A Focus on Cobalt and Nickel in New Caledonia',
    meta: [
      ['Course', 'GIS4037 — Remote Sensing'],
      ['Instructor', 'Dr. Moulay Anwar Sounny-Slitine'],
      ['Date', 'Fall 2024'],
    ],
    sections: [
      {
        title: 'Background',
        paragraphs: [
          `Traditional mineral exploration has historically depended on extensive field surveys and costly drilling operations to locate economically viable deposits. As global demand for renewable energy technologies and electric vehicles has grown rapidly, so too has the need for critical minerals such as cobalt (Co) and nickel (Ni). These two minerals are frequently found together, cobalt occurring at approximately 110 ppm and nickel at 16 mg/kg in ultramafic rock, making their co-location advantageous for exploration. When ultramafic rock weathers it forms laterites, which can contain more concentrated levels of these elements: limonite forms where cobalt concentrations are higher and saprolite where nickel dominates.`,
          `This project investigates whether remote sensing methods, specifically custom spectral indices and a machine learning classification algorithm, can be applied through Google Earth Engine (GEE) to accurately identify Co-Ni deposits and reduce the cost and environmental impact of traditional exploration. The island of New Caledonia was selected as the study area due to its status as a major global contributor to cobalt and nickel supply.`,
        ],
      },
      {
        title: 'Data',
        paragraphs: [
          `The primary source of spectral data was the Sentinel-2 satellite, launched in 2015 by the European Space Agency. Six bands from the Sentinel-2 dataset were used: Blue (B2, ~496 nm), Green (B3, ~560 nm), Red (B4, ~664 nm), Red Edge 3 (B7, ~782 nm), Near-Infrared (B8, ~835 nm), and Shortwave Infrared 2 (B12, ~2202 nm). These bands were sourced via the Earth Engine Data Catalog. Images were filtered to allow no more than 5% cloud cover to limit atmospheric interference. A Normalized Difference Vegetation Index (NDVI) mask was applied to reduce signal contamination from the island's heavy tropical vegetation, which absorbs strongly in the infrared range.`,
          `NASA's Global Digital Elevation Model (DEM) was incorporated to restrict analysis to the topographic zones where mineral-rich laterites and ultramafic soils are most found. Locations of known Co-Ni mining operations across New Caledonia were used both as training data for the machine learning classifier and as a reference against which the accuracy of both methods was evaluated.`,
        ],
      },
      {
        title: 'Methods',
        paragraphs: [
          `Two independent remote sensing methods were developed and then combined. The first method involved the formulation of two custom spectral indices designed to highlight the surface signatures of laterite and ultramafic rock. Both indices were developed iteratively by testing band combinations against reference maps of known Ni-Co mining operations. The two resulting index maps were then averaged into a single combined index map, and the DEM topographic filter was applied to complete the spectral indices output.`,
          `The second method applied supervised classification via a Random Forest (RF) algorithm within Google Earth Engine. Training data were manually compiled by visually selecting representative points for five land-cover classes: forest, development/barren, water, herbaceous, and Cobalt/Nickel. Known mining operation locations were used to populate the Cobalt/Nickel class. Due to memory constraints in Google Earth Engine, equal numbers of points could not always be assigned to each class. Once trained, the RF algorithm produced a classified prediction map across the entire region of interest.`,
          `In the final stage of the project, the machine learning map was overlaid on the spectral indices map, with both maps brought to a common color scheme using red to indicate predicted Co-Ni regions, to create a third composite map that leverages the strengths of both approaches.`,
        ],
        formulas: [
          ['LNDI = (SWIR − RedEdge) / (SWIR + RedEdge)', 'Laterite Normalized Difference Index (LNDI), using Sentinel-2 SWIR (B12, ~2202 nm) and Red Edge (B7, ~782 nm) to highlight clay minerals and iron and aluminum oxides common in lateritic soils.'],
          ['UNDI = (SWIR − NIR) / (SWIR + NIR)', 'Ultramafic Normalized Difference Index (UNDI), using Sentinel-2 SWIR (B12, ~2202 nm) and NIR (B8, ~835 nm) to highlight mineral assemblages characteristic of ultramafic rock and its weathered derivatives.'],
        ],
      },
      {
        title: 'Results',
        paragraphs: [
          `The combined LNDI, UNDI, and DEM spectral index map produced a spatially coherent output that correctly highlighted the locations of most known mining operations across New Caledonia when compared to a true-color image of the island. Some errors were present, most notably along portions of the coastline and in urban areas, likely attributable to those surfaces' interactions with infrared light. Beyond the known mining sites, the map also identified areas where no mining is currently occurring, suggesting the possible presence of Co-Ni deposits not yet under extraction.`,
          `The Random Forest classification map produced similarly useful results. Known mining operation areas were correctly classified in the Cobalt/Nickel category, and the map also predicted additional areas of potential deposits beyond current operations. As with the spectral index output, any newly predicted areas would require field confirmation before extraction activity could be initiated.`,
          `The composite map produced by overlaying the machine learning classification on the spectral indices output combined the predictive strengths of both methods. Regions flagged by only one method became visible in the composite, and areas identified by both appeared as stronger red signals, indicating greater confidence in a Co-Ni prediction. Using spatial correspondence with known mining operations as an accuracy metric, both individual methods and the composite map performed well for the study area, providing positive evidence that remote sensing through spectral indices and machine learning can be a viable and less environmentally invasive tool for critical mineral exploration.`,
        ],
      },
    ],
    figures: [
      [mineralFig1, 'Combined LNDI, UNDI, and DEM spectral index map of New Caledonia alongside true-color Sentinel-2 image', 'Figure 1: Combined LNDI, UNDI, and DEM spectral index map of New Caledonia (left) alongside a true-color Sentinel-2 image (right). Warmer colors indicate higher predicted Co-Ni likelihood; red circles mark known mining operations.', true],
      [mineralFig2, 'Random Forest classification output for New Caledonia alongside true-color Sentinel-2 image', 'Figure 2: Random Forest classification output for New Caledonia (left) alongside a true-color Sentinel-2 image (right). Dark green = forest; green = herbaceous; yellow = development/barren; red = predicted Co-Ni deposit. Red circles mark known mining operations.'],
      [mineralFig3, 'Composite map overlaying Random Forest classification onto spectral indices map', 'Figure 3: Composite map produced by overlaying the Random Forest classification onto the spectral indices map, with red indicating predicted Co-Ni regions. Stronger red signals reflect areas flagged by both methods.'],
    ],
  },
  {
    slug: 'vog-exposure',
    title: 'Vog Exposure and Respiratory Vulnerability in Hawaiʻi',
    listTitle: 'Vog Exposure and Respiratory Vulnerability in Hawaiʻi',
    subtitle: 'Spatial Risk Modeling & Hot-Spot Analysis',
    meta: [
      ['Course', 'GIS4424C — Applications in GIS for Disease Ecology and Zoonoses'],
      ['Instructor', 'Dr. Jason Blackburn'],
      ['Date', 'Fall 2025'],
    ],
    sections: [
      {
        title: 'Background',
        paragraphs: [
          `This project addresses the public-health concern in Hawaiʻi of the uneven spatial impact of volcanic smog, or vog, produced during eruptive activity at Kīlauea. Vog forms when sulfur dioxide (SO₂) and fine particulate matter (PM₂.₅; particles less than 2.5 microns in diameter) released by volcanic activity accumulate and react in the atmosphere, creating air pollution that can aggravate asthma, chronic obstructive pulmonary disease (COPD), and other respiratory illnesses. Because vog exposure varies by location depending on eruption intensity, wind patterns, and distance from the volcano, some communities may face greater health risk than others.`,
          `The objective of this study was to identify where elevated vog exposure and underlying respiratory vulnerability overlap across Hawaiʻi census tracts during an active eruptive period from October 1st to December 1st of 2025, with the broader goal of highlighting communities where public-health preparedness and risk communication may be most needed.`,
        ],
      },
      {
        title: 'Data and Materials',
        paragraphs: [
          `The analysis combines environmental monitoring data with tract-level health data and census geography. Hourly SO₂ and PM₂.₅ measurements for the period from October 1 to December 1 of 2025 were obtained from the Hawaiʻi Department of Health Clean Air Branch in table form, and these station-based observations were used to derive a pollution exposure metric based on the number of hours above high-pollution thresholds.`,
          `Census tracts from 2020 were used as the geographic unit for vulnerability and risk mapping, and tract-level estimates of adult asthma prevalence and adult COPD prevalence from 2017–2022 were compiled from the Hawaiʻi Health Data Warehouse and joined to tract polygons. To support valid spatial analysis, all datasets were projected into NAD 1983 HARN UTM Zone 5N, allowing distance-based tools such as kernel density estimation and nearest-neighbor analysis to operate in consistent map units. This dataset design is appropriate because it links hazard, health vulnerability, and geography into a single analytical framework.`,
        ],
      },
      {
        title: 'Methods',
        paragraphs: [
          `Several GIS and spatial-statistical methods were used to transform raw observations into interpretable patterns of risk. First, kernel density estimation (KDE) was applied to monitoring station counts of hours above high-pollution thresholds to create a continuous vog exposure surface, using a 90 km search radius based on the monitoring network's mean nearest-neighbor distance. Next, zonal statistics were used to summarize the KDE surface by census tract, producing a tract-level measure of relative vog exposure intensity.`,
          `This exposure metric was then standardized with tract-level asthma prevalence and COPD prevalence by converting each variable to z-scores and averaging them into a composite Vog Risk Index. Finally, the project evaluated spatial patterning with Global Moran's I, Local Moran's I (LISA), and Getis-Ord Gi* hot-spot analysis using an 8-nearest-neighbor conceptualization of spatial relationships and false discovery rate correction for the local statistics. This workflow demonstrates analysis and modeling rather than only cartographic display.`,
        ],
      },
      {
        title: 'Results',
        paragraphs: [
          `The results show that vog-related respiratory risk was not distributed randomly across Hawaiʻi. The KDE surface indicated the greatest relative exposure intensity near Kīlauea and across the southern portion of the Big Island, while lower modeled exposure occurred farther from the main emission source.`,
          `The tract-level risk analysis also revealed meaningful clustering. Local Moran's I identified high-high clusters in the southern Big Island, indicating tracts with high risk surrounded by similarly high-risk neighbors, while low-low clusters appeared near Honolulu. The Getis-Ord Gi* results supported this pattern by identifying statistically significant hot spots of elevated respiratory risk in the south and cold spots in lower-risk areas. The strongest visual evidence includes the KDE exposure map, the Gi* hot-spot map, and the Local Moran's I cluster map and scatterplot, because together they directly show where exposure is concentrated, where combined risk is highest, and how strongly those tracts cluster spatially.`,
        ],
      },
    ],
    figures: [
      [vogFig1, 'KDE surface of vog exposure intensity across the Hawaiian Island chain', 'Figure 1: Kernel density estimation (KDE) surface of vog exposure intensity across the Hawaiian Island chain, derived from monitoring station counts of hours above high-pollution thresholds using a 90 km search radius. Highest estimated exposure is concentrated near the Kīlauea eruption site on the southern Big Island.', true],
      [vogFig2, 'Getis-Ord Gi* hot-spot analysis of the composite Vog Risk Index by census tract', 'Figure 2: Getis-Ord Gi* hot-spot analysis of the composite Vog Risk Index by census tract, with statistical confidence levels of 90%, 95%, and 99%. Significant hot spots of elevated respiratory risk are concentrated along the southern Big Island; no significant hot spots are identified in other parts of the state.', true],
      [vogFig3, "Local Moran's I (LISA) cluster map of the Vog Risk Index", "Figure 3: Local Moran's I (LISA) cluster map of the Vog Risk Index by census tract across Hawaiʻi. High-high clusters are concentrated in the southern Big Island in proximity to Kīlauea, while low-low clusters appear near Honolulu. High-low and low-high outliers indicate tracts whose risk values diverge from their spatial neighbors."],
      [vogFig4, "Moran's scatterplot for the Local Moran's I analysis of the Vog Risk Index", "Figure 4: Moran's scatterplot for the Local Moran's I analysis of the Vog Risk Index, with z-transformed risk values on the x-axis and their spatial lag on the y-axis (R² = 0.31). Points in the upper-right and lower-left quadrants correspond to high-high and low-low clusters respectively; points in the remaining quadrants represent spatial outliers."],
    ],
  },
  {
    slug: 'brooks-range',
    title: 'Characterization of the Structural and Stratigraphic Relationships Across the Northern Boundary of the High-Pressure Terrane in the Brooks Range Orogen of Northern Alaska',
    listTitle: 'Structural & Stratigraphic Relationships Across the Brooks Range',
    subtitle: 'High-Pressure Terrane, Northern Alaska — Undergraduate Honors Research',
    meta: [
      ['Course', 'Undergraduate Senior Project (USP) — Honors Thesis'],
      ['Research Advisor', 'Dr. Jim Vogl'],
      ['Date', 'July 2025 – May 2026'],
    ],
    sections: [
      {
        title: 'Background',
        paragraphs: [
          `During the Early Cretaceous, the collision of a passive continental margin with an outboard island arc terrane produced the Brooks Range orogenic belt of northern Alaska. This collision formed a fold-thrust belt and, at deeper structural levels, two distinct metamorphic belts. The southernmost of these, the Schist Belt (SB), contains minerals consistent with blueschist and eclogite facies, recording high-pressure metamorphism during deep tectonic burial at approximately 25 to 30 km. Relict high-pressure phases including glaucophane and omphacitic pyroxene record a subduction-related metamorphic history, with polyphase structural fabrics indicating that the oldest deformation involved southward underthrusting of continental-margin material during the Late Jurassic to earliest Cretaceous. To the north, the Central Belt (CB) contains thrust-imbricated metasedimentary and metavolcanic rocks metamorphosed under lower-pressure greenschist facies conditions. Understanding the boundary between these two belts is essential for reconstructing the tectonic and metamorphic evolution of the range and for identifying the mechanisms by which the high-pressure rocks of the Schist Belt were exhumed to the surface.`,
          `In the Dalton Highway region, the sole road traversing the Brooks Range, the SB/CB boundary is commonly mapped as the north-dipping Hammond River shear zone (HRSZ). The exact location, orientation, and kinematics of the HRSZ are poorly constrained along much of its length, which limits the ability to test competing models for how the high-pressure rocks of the Schist Belt were exhumed. Two mechanisms have been proposed: exhumation by thrust faulting, in which overlying rock sheets were stacked and subsequently eroded, and exhumation by extensional faulting, in which crustal thinning allowed buried rocks to rise. Each mechanism predicts a distinct geometry and kinematics for the HRSZ, making precise structural characterization of the shear zone necessary. Additionally, no published detrital zircon age data exists for the rock units in the Dalton Highway area, leaving the depositional ages and stratigraphic relationships on either side of the boundary unconstrained. This project addresses that gap by characterizing the structural and stratigraphic relationships across the northern boundary of the high-pressure terrane west of the Dalton Highway.`,
        ],
      },
      {
        title: 'Data and Methods',
        paragraphs: [
          `The study area is located west of the Dalton Highway in the central Brooks Range, near the town of Wiseman and the drainages of Vermont Creek, Gold Creek, Smith Creek, and the Hammond River, crossing the mapped trace of the HRSZ. Geologic mapping was conducted from July 14 to August 6, 2025, totaling 22 days of active fieldwork. At each outcrop, structural measurements including foliation orientations, lineation directions, fold geometry, and kinematic indicators were recorded using a Brunton compass and logged in StraboSpot. A total of 107 rock samples were collected across all major units between the Schist Belt and the Central Belt.`,
          `Seven samples were selected for U-Pb detrital zircon geochronology spanning four rock units: the northern Schist Belt transition zone, the Midnight Dome unit, the HR Unit, and the Nugget Schist. All samples are quartzites, metasandstones, or quartz-rich schists suitable for detrital zircon analysis. Each was processed through jaw crushing, disc milling, magnetic separation, and heavy liquid separation using methylene iodide (MEI) to isolate zircon grains. Full mineral separation has been completed for all seven samples. The next step is handpicking zircon grains, mounting in epoxy, and isotopic analysis by LA-ICP-MS, targeting a minimum of 100 grains per sample (Gehrels, 2014). Maximum depositional ages will be calculated using the approaches of Dickinson and Gehrels (2009), and age spectra will be compared across units to address stratigraphic and provenance questions.`,
        ],
      },
      {
        title: 'Preliminary Results',
        paragraphs: [
          `Mapping documented a consistent north-to-south decrease in metamorphic grade. Along Wiseman Creek, Schist Belt rocks consist of calc-schists, quartz-mica schists, and calc-silicate rocks. The Midnight Dome unit to the north consists of quartzose schists and metasandstones with well-developed foliation. The HR Unit includes phyllites, graphitic phyllites, quartz-mica schists, and metasandstones, while the Nugget Schist is characterized by blue-gray albite-rich schist with porphyroblastic textures.`,
          `Foliations across most of the study area are gently dipping (6 to 30 degrees) with broadly east-west strikes. Crenulation folds overprinting an earlier foliation were documented at several localities, indicating at least two phases of deformation. The most significant structural finding is steep to near-vertical foliations (43 to 89 degrees) in the Wiseman Creek gorge, which stands in contrast to the rest of the area and likely reflects concentrated strain near the SB/CB boundary. Full mineral separation has been completed for all seven detrital zircon samples; U-Pb analysis by LA-ICP-MS awaits instrument availability.`,
        ],
      },
      {
        title: 'Conclusion and Future Work',
        paragraphs: [
          `Field mapping and mineral separation have been completed, providing a structural and lithologic framework for interpreting the HRSZ in the Dalton Highway region. The observed north-to-south decrease in metamorphic grade and evidence for at least two deformation phases align with regional interpretations. The zone of steep foliations in the Wiseman Creek gorge is a significant finding that may represent concentrated deformation at the SB/CB boundary.`,
          `The primary limitation at this stage is the absence of U-Pb isotopic age data due to the LA-ICP-MS instrument being non-functional. Once ages are obtained, they will be used to determine whether units on either side of the HRSZ share the same depositional history or derive from separate sedimentary basins, directly informing models for Schist Belt exhumation.`,
        ],
      },
    ],
    table: {
      caption: 'Table 1. Samples processed for detrital zircon U–Pb geochronology in this study.',
      headers: ['Sample', 'Unit', 'Locality', 'Rock Type', 'Coordinates (lat/lon)'],
      rows: [
        ['25BR03', 'SB (Northern)', 'Wiseman Creek', 'Calc-schist', '67.4202520°N, 150.1406040°W'],
        ['25BR31', 'HR Unit', 'Gold Creek', 'Block-weathering metasandstone', '67.5107541°N, 149.8125003°W'],
        ['25BR36', 'Midnight Dome', 'Smith Creek Dome', 'Quartzose schist', '67.4769045°N, 150.1804389°W'],
        ['25BR48', 'Midnight Dome', 'Smith Ck. Dome – Midnight Dome', 'Quartzose schist', '67.4865129°N, 150.1596195°W'],
        ['25BR66', 'Nugget Schist', 'Nugget Ridge', 'Quartzose schist', '67.4676018°N, 149.8426963°W'],
        ['25BR96', 'Midnight Dome', 'Midnight Dome', 'Meta-sandstone/quartzite', '67.4593986°N, 150.1690418°W'],
        ['25BR97', 'SB (Northern)', 'Wiseman Creek gorge', 'Quartzose schist', '67.4236791°N, 150.1413421°W'],
      ],
    },
    figures: [
      [brooksFig1, 'Shaded relief map of the study area west of the Dalton Highway, central Brooks Range, Alaska', 'Figure 1: Shaded relief map of the study area west of the Dalton Highway, central Brooks Range, Alaska. Green circles mark the six detrital zircon sample locations; structural measurements are shown by the symbols in the legend. Inset shows location within Alaska.', true],
    ],
    references: [
      'Dickinson, W. R., & Gehrels, G. E. (2009). Use of U-Pb ages of detrital zircons to infer maximum depositional ages of strata: A test against a Colorado Plateau Mesozoic database. Earth and Planetary Science Letters, 288(1–2), 115–125.',
      'Gehrels, G. (2014). Detrital zircon U-Pb geochronology applied to tectonics. Annual Review of Earth and Planetary Sciences, 42(1), 127–149.',
      'Hoiland, C. W., Miller, E. L., & Pease, V. (2018). Greenschist facies metamorphic zircon overgrowths as a constraint on exhumation of the Brooks Range Metamorphic Core, Alaska. Tectonics, 37(10), 3429–3455.',
      'Till, A. B., Dumoulin, J. A., Harris, A. G., Moore, T. E., Bleick, H. A., & Siwiec, B. R. (2008). Bedrock geologic map of the southern Brooks Range, Alaska, and accompanying conodont data. USGS Open-File Report 2008-1149.',
    ],
  },
  {
    slug: 'kilauea-hydrology',
    title: 'Impacts of Volcanism on Hydrological Systems: Rainfall Anomalies, Ash Leachate Chemistry, and Spatial Patterns of Water-Quality Change During the 2018 Kīlauea Eruption',
    listTitle: 'Impacts of Volcanism on Hydrological Systems',
    subtitle: 'Rainfall Anomalies & Water-Quality Change During the 2018 Kīlauea Eruption',
    meta: [
      ['Course', 'GEO3280 — Principles of Geographic Hydrology'],
      ['Instructor', 'Dr. Johanna Engström'],
      ['Date', 'Fall 2025'],
    ],
    sections: [
      {
        title: 'Background',
        paragraphs: [
          `Kīlauea is one of the most active volcanoes on Earth, located on the Big Island of Hawaiʻi and sustained by a Pacific hotspot. In 2018, volcanic activity migrated from the summit and upper rift zone to the Lower East Rift Zone (LERZ), producing fissure eruptions and extensive lava flows that destroyed structures and fundamentally altered the surrounding landscape. Significant ash and gas emissions accompanied these events, generating harmful environmental impacts across the island. The eruptive period began in May 2018 and continued with continuous lava flow through September 2018.`,
          `This project investigates the intersection of volcanic activity and hydrology during that period, focusing on how anomalously elevated precipitation interacted with volcanic emissions and ash fallout to alter both atmospheric and surface-water chemistry across Kīlauea and its surrounding watersheds. This project was organized around three central research questions: first, whether rainfall over Kīlauea was anomalously high before and during the 2018 eruption; second, whether that rainfall reacted with ash fallout to influence rainwater and catchment chemistry; and third, whether spatial patterns in pollutants and acidity relative to the eruption and surrounding watersheds could be identified.`,
        ],
      },
      {
        title: 'Data and Materials',
        paragraphs: [
          `Five primary data sources were used in this analysis. Precipitation data came from Daymet V4, which provided gridded monthly rainfall at 1-kilometer resolution over the Hawaii domain; January through April totals were extracted for both a historical baseline period (2000–2006) and the eruption year (2018) to support the anomaly calculation. Water chemistry data came from two USGS sources: a full physical-chemical water-quality dataset covering the entire island, with coordinates and collection dates that allowed samples to be classified as Pre-Eruption, During-Eruption, or Post-Eruption; and a dedicated 2018 Kīlauea field dataset comprising two CSV files, one for ash leachate analyses and one for catchment and rainwater analyses, collected in close proximity to active fissures during the eruption itself.`,
          `Spatial context for the eruption was provided by USGS geospatial eruption data, specifically the 2018 LERZ lava flow footprint and mapped fissure locations, which served as reference layers throughout the analysis. Stream and watershed shapefiles from the State of Hawaiʻi Office of Planning and Sustainable Development were used to define hydrological boundaries for the catchment-level component of the study.`,
        ],
      },
      {
        title: 'Methods',
        paragraphs: [
          `Precipitation data from Daymet V4 were used to compute a rainfall anomaly by comparing January–April totals for 2018 against the multi-year baseline period (2000–2006). This comparison allowed identification of whether conditions in the months immediately preceding and overlapping with the eruption were wetter than normal across the Kīlauea region.`,
          `USGS water-quality sample locations were geocoded using their coordinate fields and classified temporally into Pre-Eruption, During-Eruption, and Post-Eruption periods based on collection dates. Water chemistry variables, including pH and concentrations of volatile and potentially toxic elements such as selenium (Se), sulfur (S), and arsenic (As), were then mapped spatially to identify patterns related to eruption fissures, lava flows, and watershed boundaries.`,
          `Ash leachate and catchment/rainwater chemistry data from the USGS field campaign were incorporated to supplement the fixed-station water-quality record. Because these samples were collected much closer to the active fissures, they provided a higher-resolution view of pollutant concentrations near the source of contamination. Catchment effects were evaluated by overlaying sample locations against watershed shapefiles and the LERZ lava footprint to understand how volcanic inputs moved through the hydrological system.`,
        ],
      },
      {
        title: 'Results',
        paragraphs: [
          `The months leading up to the 2018 Kīlauea eruption were characterized by above-average precipitation over the volcano, and this anomalously elevated rainfall continued for the duration of the eruptive period. This finding carried consequences across three environmental systems.`,
          `In the atmosphere, rainfall mixed with the large volumes of sulfur dioxide (SO₂) released by the eruption; SO₂ oxidized in the presence of water to form sulfuric acid, generating acid rain and sulfate aerosols collectively known as vog (volcanic smog) that spread across the island. At the surface, ashfall deposits released leachates when wetted, introducing volatile and potentially toxic elements, including selenium (Se), sulfur (S), and arsenic (As), into streams and catchments while simultaneously lowering pH and increasing turbidity. The elevated moisture conditions also had mechanical implications, as wet rock is generally weaker than dry rock, which may have influenced the behavior of volcanic materials during the eruptive period.`,
          `The Pre/During/Post-Eruption spatial analysis of water-quality monitoring data revealed discernible changes in pollutant concentrations and acidity across time periods, with the most pronounced chemical signatures appearing in areas downslope of active fissures and within catchments intersecting the LERZ lava footprint. Catchment-level mapping further demonstrated how volcanic inputs were transmitted through the island's hydrological network, with affected streams showing elevated pollutant signatures during and shortly after the eruptive period.`,
        ],
      },
    ],
    figures: [
      [impactFig1, 'Map of abnormal rainfall on the Big Island of Hawaii along with tephra and magma extent from the 2018 Kīlauea eruption', 'Figure 1: Map of abnormal rainfall on the Big Island of Hawaii along with the extent of tephra and magma from the 2018 Kīlauea eruption.', true],
      [impactFig2a, 'Pollution recorded before the 2018 Kīlauea eruption', 'Figure 2a: Map of pollution recorded before the 2018 Kīlauea eruption from USGS monitoring stations across the inhabited islands of Hawaii, including the extent of the magma released.'],
      [impactFig2b, 'Pollution recorded during the 2018 Kīlauea eruption', 'Figure 2b: Map of pollution recorded during the 2018 Kīlauea eruption from USGS monitoring stations across the inhabited islands of Hawaii, including the extent of the magma released.'],
      [impactFig2c, 'Pollution recorded post-eruption', 'Figure 2c: Map of pollution recorded post-eruption from USGS monitoring stations across the inhabited islands of Hawaii, including the extent of the magma released.'],
      [impactFig3, 'Map of eruption and tephra extent and local marine habitat', 'Figure 3: Map of eruption and tephra extent and local marine habitat to highlight potential direct ecological effects of the eruption.', true],
    ],
  },
]
