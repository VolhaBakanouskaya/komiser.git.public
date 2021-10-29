import { PaginationModule } from 'ngx-bootstrap/pagination';
import { TrendModule } from 'ngx-trend';

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AwsService } from './aws.service';
import { AwsComputeComponent } from './compute/aws/aws.component';
import { ComputeComponent } from './compute/compute.component';
import { DigitaloceanComputeComponent } from './compute/digitalocean/digitalocean.component';
import { GcpComputeComponent } from './compute/gcp/gcp.component';
import { OvhComputeComponent } from './compute/ovh/ovh.component';
import { AwsDashboardComponent } from './dashboard/aws/aws.component';
import { AzureDashboardComponent } from './dashboard/azure/azure.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DigitaloceanDashboardComponent } from './dashboard/digitalocean/digitalocean.component';
import { GcpDashboardComponent } from './dashboard/gcp/gcp.component';
import { OvhDashboardComponent } from './dashboard/ovh/ovh.component';
import { AwsDataAndAIComponent } from './data-and-ai/aws/aws.component';
import { DataAndAiComponent } from './data-and-ai/data-and-ai.component';
import { GcpDataAndAIComponent } from './data-and-ai/gcp/gcp.component';
import { OvhDataAndAIComponent } from './data-and-ai/ovh/ovh.component';
import { DigitaloceanService } from './digitalocean.service';
import { GcpService } from './gcp.service';
import { GoogleAnalyticsService } from './google-analytics.service';
import { AwsLimitsComponent } from './limits/aws/aws.component';
import { GcpLimitsComponent } from './limits/gcp/gcp.component';
import { LimitsComponent } from './limits/limits.component';
import { OvhLimitsComponent } from './limits/ovh/ovh.component';
import { AwsNetworkComponent } from './network/aws/aws.component';
import { DigitaloceanNetworkComponent } from './network/digitalocean/digitalocean.component';
import { GcpNetworkComponent } from './network/gcp/gcp.component';
import { NetworkComponent } from './network/network.component';
import { OvhNetworkComponent } from './network/ovh/ovh.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { OvhService } from './ovh.service';
import { AwsProfileComponent } from './profile/aws/aws.component';
import { GcpProfileComponent } from './profile/gcp/gcp.component';
import { OvhProfileComponent } from './profile/ovh/ovh.component';
import { ProfileComponent } from './profile/profile.component';
import { AwsSecurityComponent } from './security/aws/aws.component';
import { DigitaloceanSecurityComponent } from './security/digitalocean/digitalocean.component';
import { GcpSecurityComponent } from './security/gcp/gcp.component';
import { OvhSecurityComponent } from './security/ovh/ovh.component';
import { SecurityComponent } from './security/security.component';
import { AwsStorageComponent } from './storage/aws/aws.component';
import { DigitaloceanStorageComponent } from './storage/digitalocean/digitalocean.component';
import { GcpStorageComponent } from './storage/gcp/gcp.component';
import { OvhStorageComponent } from './storage/ovh/ovh.component';
import { StorageComponent } from './storage/storage.component';
import { StoreService } from './store.service';

const appRoutes: Routes = [
  {
    path: "compute",
    component: ComputeComponent,
    data: { title: "Compute - Komiser" },
  },
  {
    path: "storage",
    component: StorageComponent,
    data: { title: "Storage - Komiser" },
  },
  {
    path: "network",
    component: NetworkComponent,
    data: { title: "Network - Komiser" },
  },
  {
    path: "security",
    component: SecurityComponent,
    data: { title: "Security - Komiser" },
  },
  {
    path: "data-and-ai",
    component: DataAndAiComponent,
    data: { title: "Data & AI - Komiser" },
  },
  {
    path: "profile",
    component: ProfileComponent,
    data: { title: "Profile - Komiser" },
  },
  {
    path: "limits",
    component: LimitsComponent,
    data: { title: "Service Limits Checks - Komiser" },
  },
  {
    path: "notifications",
    component: NotificationsComponent,
    data: { title: "Notifications - Komiser" },
  },
  {
    path: "",
    component: DashboardComponent,
    data: { title: "Dashboard - Komiser" },
  },
];

@NgModule({
  declarations: [
    AppComponent,
    ComputeComponent,
    DashboardComponent,
    StorageComponent,
    NetworkComponent,
    SecurityComponent,
    DataAndAiComponent,
    ProfileComponent,
    LimitsComponent,
    AwsDashboardComponent,
    GcpDashboardComponent,
    AwsComputeComponent,
    GcpComputeComponent,
    AwsStorageComponent,
    GcpStorageComponent,
    GcpNetworkComponent,
    AwsNetworkComponent,
    AwsSecurityComponent,
    GcpSecurityComponent,
    GcpDataAndAIComponent,
    AwsDataAndAIComponent,
    AwsLimitsComponent,
    GcpLimitsComponent,
    AwsProfileComponent,
    GcpProfileComponent,
    NotificationsComponent,
    OvhDashboardComponent,
    OvhComputeComponent,
    OvhStorageComponent,
    OvhNetworkComponent,
    OvhSecurityComponent,
    OvhDataAndAIComponent,
    OvhLimitsComponent,
    OvhProfileComponent,
    DigitaloceanDashboardComponent,
    DigitaloceanComputeComponent,
    DigitaloceanStorageComponent,
    DigitaloceanNetworkComponent,
    DigitaloceanSecurityComponent,
    AzureDashboardComponent,
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    HttpModule,
    BrowserModule,
    PaginationModule.forRoot(),
    BrowserAnimationsModule,
    TrendModule,
    FormsModule,
  ],
  providers: [
    AwsService,
    DigitaloceanService,
    StoreService,
    GoogleAnalyticsService,
    GcpService,
    OvhService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(protected _googleAnalyticsService: GoogleAnalyticsService) {}
}
