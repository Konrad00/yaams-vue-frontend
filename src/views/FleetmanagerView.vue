<script setup lang="ts">
import { useI18n } from 'vue-i18n';

const { t } = useI18n()
</script>

<template>
    <h1 class="display-4 mb-4">{{ t("fleetOverview.heading") }}</h1>
    <p class="lead">{{ t("fleetOverview.introduction") }}</p>

    <hr>

    <!-- TODO: add button to add aircraft, if permission 'add aircraft' is set -->
    
    <div class="my-4">
        <h2 class="h4">Current active fleet</h2>

        <table class="table table-sm">
            <thead class="table-dark">
                <tr>
                    <th scope="col" class="text-center">{{ t("fleetOverview.tailNumber")}}</th>
                    <th scope="col" class="text-center">{{ t("fleetOverview.type")}}</th>
                    <th scope="col" class="text-center">{{ t("fleetOverview.currentLocation")}}</th>
                    <th scope="col" class="text-center">{{ t("fleetOverview.totalLoggedHours")}}</th>
                    <th scope="col" class="text-center" v-if="true">{{ t("fleetOverview.actions")}}</th> <!-- TODO: only if permission 'edit aircraft' is set -->
                </tr>
            </thead>
            <tbody>
                <!-- TODO: actual only static data... -->
                <tr>
                    <td class="text-center"><router-link :to="'/airline/fleetmanager/view/' + 'D-ASUN'">D-ASUN</router-link></td>
                    <td class="text-center">Boeing 737-800</td>
                    <td class="text-center">KATL</td>
                    <td class="text-center">1500 hours</td>
                    <td class="text-center" v-if="true">
                        <button class="btn btn-sm btn-primary">{{ t("fleetOverview.edit") }}</button>
                        <button class="btn btn-sm btn-danger">{{ t("fleetOverview.delete") }}</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<style scoped lang="scss">
</style>